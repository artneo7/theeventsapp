import { TOKEN_VALIDATE_POST } from './api';
export const handle = async ({event, resolve}) => {

  event.locals.isLoggedIn = false;

  // Check if user is logged in
  let cookies = event.request.headers.get('cookie');
  if (cookies) {
    let session = ('; '+cookies).split(`; session=`).pop().split(';')[0];
    const {url, options} = TOKEN_VALIDATE_POST(session);
    await fetch(url, options).then((response) => {
      if (response.ok) {
        event.locals.isLoggedIn = true;
        event.locals.token = session;
      }
    });
  }

  // Check if intro was already played
  let intro = ('; '+cookies).split(`; intro=`).pop().split(';')[0];
  if (intro) event.locals.intro = intro;
  
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
