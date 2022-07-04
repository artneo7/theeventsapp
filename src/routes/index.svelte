<script>
  import Header from '../components/Header.svelte';
  import Form from '../components/Form.svelte';
  import editMode from '../stores/store';
  import {USER_POST} from '../api';
  let email;
  let password;

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

  let handleCreateAccount = () => {
    const {url, options} = USER_POST({
      "email": email,
      "password": password
    });
    console.log(url);
    console.log(options);
    fetch(url, options).then((response) => {
        console.log(response);
        return response.json();
      }).then((json) => console.log(json));
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

<!-- <h1>Login test</h1>
<input type="text" bind:value="{email}" />
<input type="password" bind:value="{password}" />
<button class="btn" on:click={handleCreateAccount}>Login</button> -->

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
