<script>
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
</script>

<svelte:head>
  <title>TheEventsApp</title>
</svelte:head>

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
