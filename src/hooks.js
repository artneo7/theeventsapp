import { TOKEN_VALIDATE_POST } from './api';
export const handle = async ({event, resolve}) => {

  event.locals.isLoggedIn = false;

  let session = event.request.headers.get('cookie');
  if (session) {
    session = session.replace('session=', '');
    const {url, options} = TOKEN_VALIDATE_POST(session);
    await fetch(url, options).then((response) => {
      if (response.ok) {
        event.locals.isLoggedIn = true;
      }
    });
  }
  
  const response = await resolve(event);
  return response;
};

export function getSession(event) {
  const { isLoggedIn } = event.locals;
  return {
      isLoggedIn
  };
}
