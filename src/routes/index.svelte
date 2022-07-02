<script>
  import Header from '../components/Header.svelte';
  import Form from '../components/Form.svelte';
  import editMode from '../stores/store';

  let body = {
    "username": "adm",
    "password": "123",
  };
  console.log(body);
  function fetchData() {
    fetch('http://theeventsappapi.test/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => console.log(json));
  }
</script>

<svelte:head>
  <title>TheEventsApp</title>
</svelte:head>

<main class="main">
  <div class="main__wrapper wrap">
    <Form />
    <h2>Preview</h2>
  </div>
</main>

<h1>Login test</h1>
<button class="btn" on:click={fetchData}>Login</button>

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
