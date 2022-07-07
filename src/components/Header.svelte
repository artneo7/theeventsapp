<script>
  import UserProfile from '../components/UserProfile.svelte';
  import { editMode } from '../stores';
  import Modal from './Modal.svelte';
  import Login from './Login.svelte'
  import { goto } from '$app/navigation'
  
  export let login;

  // Manage editMode state
  let addNewHandler = () => {
    $editMode = !$editMode;
  };

  // Handle Logout
  let handleLogout = () => {
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.reload();
  }
</script>

<header class="header">
  <div class="header__wrapper wrap">
    <a href="/" class="logo">
      <img src="/logo.png" alt="TheEventsApp logo" class="logo__img" />
      TheEventsApp
    </a>

    {#if login}
    <div class="content">
      <button
        disabled={$editMode}
        class="btn btn-outline"
        on:click={addNewHandler}>Add new</button
      >
      <button class="btn btn-ghost" on:click="{handleLogout}">Logout</button>
    </div>
    {:else}
    <div class="content">
      <label class="btn btn-outline modal-button" for="signup-form">Sign up</label>
      <label class="btn btn-ghost modal-button" for="login-form">Login</label>
    </div>
    {/if}
  </div>
</header>

<Modal id="login-form">
  <Login />
</Modal>

<style>
  .header {
    padding-top: 20px;
  }
  .header__wrapper {
    background-color: #fff;
    margin: 0 20px;
    border-radius: 16px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid var(--g3);
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.5rem;
    color: var(--feat);
    font-weight: bold;
  }
  .logo__img {
    max-width: 36px;
  }
  .content {
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>
