<script>
  import Header from '../components/Header.svelte';
  import Form from '../components/Form.svelte';
  import {USER_POST, USER_GET, TOKEN_POST, TOKEN_VALIDATE_POST} from '../api';
  import {formInputs, validateUser} from '../stores/store';

  let handleLogin = () => {
  const {url, options} = TOKEN_POST({
    "username": email,
    "password": password
  });
  fetch(url, options).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json();
    }).then((json) => {
      localStorage.setItem('token', json.token)
    });
  }
</script>

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
