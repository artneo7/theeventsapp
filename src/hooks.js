import { writable } from "svelte/store";
import { browser } from "$app/env";

export const userName = writable(
  browser && (localStorage.getItem("userName" || "Andre"))
  );
userName.subscribe((val) => browser && localStorage.setItem("userName", val));

export const handle = async ({event, resolve}) => {
  const response = await resolve(event);

  // Set cookie
  response.headers.append("Set-Cookie", "session=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aGVldmVudHNhcHBhcGkudGVzdCIsImlhdCI6MTY1NzAyMjU5NywibmJmIjoxNjU3MDIyNTk3LCJleHAiOjE2NTcxMDg5OTcsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.4M765A6Ou2sNtAzXmqtm65wgDJw4tvgDZRJemgBSkmA; HttpOnly=true");

  return response;
};

// export const getSession = (request) => {
//   console.log(request.locals);
//   return {
//     user: {
//       id: "ok"
//     }
//   }
// }