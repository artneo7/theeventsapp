<script>
  import Input from './Input.svelte';
  import {TOKEN_POST} from '../api';
  import Error from './Error.svelte';

  let email;
  let password;
  let loading;
  let error;

  let handleLogin = async (e) => {
    e.preventDefault();
    error = '';
    
    if (!email.trim()) {
      return error = 'Please type your email';
    }

    if (!password.trim()) {
      return error = 'Please type your password';
    }

    loading = true;
    
    const {url, options} = TOKEN_POST({
      "username": email,
      "password": password
    });

    try {
      await fetch(url, options).then((response) => {
        if (!response.ok) throw "Invalid email or password";
        return response.json();
      }).then((json) => {
        loading = false;
        document.cookie = `session=${json.token}`
        location.reload();
      });
    } catch(err) {
      if (err instanceof TypeError) {
        err = "Something went wrong… please contact the developer";
        error = err;
        loading = false;
      } else {
        error = err;
        loading = false;
      }
    } finally {
      loading = false;
    }
  }
</script>

<form class="login">
  <h1 class="title">Login</h1>
  <Input bind:value={email} label="Email" class="form__login" />
  <Input bind:value={password} label="Password" type="password" class="form__login" />
  <Error {error} />

  <button class="btn btn-outline" class:loading={loading} on:click="{handleLogin}">Log in</button>
</form>

<style>
  .login {
    margin-bottom: 20px;
    display: grid;
    gap: 20px;
  }
  .title {
    font-size: 1.5rem;
    color: var(--feat);
    font-weight: bold;
  }
</style>