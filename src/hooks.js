import { TOKEN_VALIDATE_POST } from './api';
export const handle = async ({event, resolve}) => {

  event.locals.isLoggedIn = false;
  
  // Check if intro was already played
  let intro = event.request.headers.get('cookie');
  if (intro) intro = intro.replace('intro=', '');
  event.locals.intro = intro;

  // Check if user is logged in
  let session = event.request.headers.get('cookie');
  if (session) {
    session = session.replace('session=', '');
    const {url, options} = TOKEN_VALIDATE_POST(session);
    await fetch(url, options).then((response) => {
      if (response.ok) {
        event.locals.isLoggedIn = true;
        event.locals.token = session;
      }
    });
  }
  
  const response = await resolve(event);
  return response;
};

// Pass variable to "export async function load({session})" in __layout.svelte
export function getSession(event) {
  const { isLoggedIn, token, intro } = event.locals;
  return {
      isLoggedIn,
      token,
      intro
  };
}
