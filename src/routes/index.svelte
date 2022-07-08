<script>
  import Form from '../components/Form.svelte';
  import {TOKEN_POST, EVENT_POST, TOKEN_VALIDATE_POST} from '../api';
  import {formInputs} from '../stores';
  import { getCookie } from '../helpers';

  let testToken = () => {
    const {url, options} = TOKEN_VALIDATE_POST("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aGVldmVudHNhcHBhcGkudGVzdCIsImlhdCI6MTY1NzI4NjM3NywibmJmIjoxNjU3Mjg2Mzc3LCJleHAiOjE2NTczNzI3NzcsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.8SL0QSfJQxfPdxpt0LxN-6hmGINjtDdqijflh05h_bU");

    fetch(url, options).then((response) => {
      console.log(response);
    })
  }

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
</script>

<svelte:head>
  <title>TheEventsApp</title>
</svelte:head>

<button class="btn" on:click="{testToken}">Test token</button>

<main class="main">
  <div class="main__wrapper wrap">
    <Form />

    <ul style="display: grid, align-items: start;">
      <li>Step: {$formInputs[0].step}</li>
      <li>Type: {$formInputs[0].type}</li>
      <li>Name: {$formInputs[0].title}</li>
      <li>Date: {$formInputs[0].date}</li>
      <li>Description: {$formInputs[0].description}</li>
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
