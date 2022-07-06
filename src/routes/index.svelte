<script>
  import Header from '../components/Header.svelte';
  import Form from '../components/Form.svelte';
  import {TOKEN_POST, EVENT_POST} from '../api';
  import {formInputs} from '../stores';
  import { getCookie } from '../helpers';

  let handleEvent = () => {
    const formData = new FormData();
    formData.append('title', 'Teste 1');

    const token = getCookie('session');
    const {url, options} = EVENT_POST(formData, token);
    fetch(url, options).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      console.log(response);
      return response.json();
    }).then((json) => {
      console.log(json);
    });
  }

  let handleLogin = () => {
  const {url, options} = TOKEN_POST({
    "username": "adm",
    "password": "123"
  });
  fetch(url, options).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json();
    }).then((json) => {
      document.cookie = `session=${json.token}`
    });
  }
</script>

<button class="btn btn-primary" on:click="{handleEvent}">Postar</button>

<button class="btn" on:click="{handleLogin}">Login</button>

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
      <li>Description: {$formInputs.description}</li>
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
