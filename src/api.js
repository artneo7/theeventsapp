const API_URL = 'http://theeventsappapi.test/json';

export let USER_POST = (body) => {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}