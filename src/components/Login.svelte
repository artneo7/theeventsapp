<script>
  import Input from './Input.svelte';
  import {TOKEN_POST} from '../api';
  import autoAnimate from '@formkit/auto-animate';

  let email;
  let password;
  let loading;
  let error;

  $: if (error) {
    setTimeout(() => {
      error = null;
    }, 3000);
  }

  let handleLogin = () => {
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

    fetch(url, options).then((response) => {
      console.log(response);
        if (!response.ok) {
          email = '';
          password = '';
          error = "Invalid email or password";
          loading = false;
          return;
        }
        return response.json();
      }).then((json) => {
        loading = false;
        document.cookie = `session=${json.token}`
        location.reload();
      });
  }
</script>

<section class="login">
  <h1 class="title">Login</h1>
  <Input bind:value={email} label="Email" class="form__login" />
  <Input bind:value={password} label="Password" type="password" class="form__login" />
  <div use:autoAnimate>
    {#if error}
    <div class="alert alert-warning">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span>{error}</span>
      </div>
    </div>
    {/if}
  </div>

  <button class="btn btn-outline" class:loading={loading} on:click="{handleLogin}">Log in</button>
</section>

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