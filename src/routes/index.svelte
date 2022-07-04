<script>
  import Header from '../components/Header.svelte';
  import Form from '../components/Form.svelte';
  import editMode from '../stores/store';
  import {USER_POST, USER_GET, TOKEN_POST} from '../api';
  import {formInputs, validateUser} from '../stores/store';
  let email;
  let password;
  let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aGVldmVudHNhcHBhcGkudGVzdCIsImlhdCI6MTY1Njk2Mzk3MiwibmJmIjoxNjU2OTYzOTcyLCJleHAiOjE2NTcwNTAzNzIsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.HekxwQNhwTewVwXVwxE6VhU1RF0Dat-VzEXQII8CICw";

  // function fetchData() {
  //   fetch('http://theeventsappapi.test/json/api/user', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(body),
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((json) => console.log(json));
  // }

  // let handleCreateAccount = () => {
  //   const {url, options} = USER_POST({
  //     "email": email,
  //     "password": password
  //   });
  //   console.log(url);
  //   console.log(options);
  //   fetch(url, options).then((response) => {
  //       console.log(response);
  //       return response.json();
  //     }).then((json) => console.log(json));
  // }

  let handleLogin = () => {
  const {url, options} = TOKEN_POST({
    "username": email,
    "password": password
  });
  fetch(url, options).then((response) => {
      console.log(response);
      return response.json();
    }).then((json) => console.log(json.token));
  }

  let getUser = () => {
  const {url, options} = USER_GET(token);
  fetch(url, options).then((response) => {
      if (response.ok) {
        $validateUser = true;
      }
    });
  }
</script>

{#if $validateUser}
<h1>You are logged in</h1>
{/if}

<h1>Login test</h1>
<input type="text" bind:value="{email}" />
<input type="password" bind:value="{password}" />
<button class="btn" on:click={handleLogin}>Login</button>
<button class="btn" on:click={getUser}>Get user</button>

<svelte:head>
  <title>TheEventsApp</title>
</svelte:head>

<main class="main">
  <div class="main__wrapper wrap">
    <Form />

    <ul style="display: grid, align-items: start;">
      <li>Step: {$formInputs.step}</li>
      <li>Type: {$formInputs.type}</li>
      <li>Name: {$formInputs.name}</li>
      <li>Date: {$formInputs.date}</li>
    </ul>

  </div>
</main>

<style>
  .main {
    margin-top: 40px;
  }
  .main__wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
  }
</style>
