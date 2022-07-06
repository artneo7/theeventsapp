export const handle = async ({event, resolve}) => {
  
  if (event.request.headers.get('cookie')) {
    event.locals.isLoggedIn = true;
  } else {
    event.locals.isLoggedIn = false;
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
