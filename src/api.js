const API_URL = 'http://theeventsappapi.test/json';

export function EVENTS_GET(token) {
  return {
    url: API_URL + '/api/events',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      }
    },
  };
}

export function EVENT_POST(formData, token) {
  return {
    url: API_URL + '/api/event',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    },
  };
}

export function EVENT_DELETE(id, token) {
  return {
    url: `${API_URL}/api/event/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

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