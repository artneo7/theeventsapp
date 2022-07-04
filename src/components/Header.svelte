<script>
  import UserProfile from '../components/UserProfile.svelte';
  import {editMode} from '../stores/store';
  import Modal from './Modal.svelte';

  // Manage editMode state
  let addNewHandler = () => {
    $editMode = !$editMode;
  };
</script>

<header class="header">
  <div class="header__wrapper wrap">
    <a href="/" class="logo">
      <img src="/logo.png" alt="TheEventsApp logo" class="logo__img" />
      TheEventsApp
    </a>

    <div class="content">
      <button
        disabled={$editMode}
        class="btn btn-outline"
        on:click={addNewHandler}>Add new</button
      >
      <label class="btn btn-outline modal-button" for="signup-form">Sign up</label>
      <label class="btn btn-ghost modal-button" for="login-form">Login</label>
    </div>
  </div>
</header>

<Modal id="login-form">
  <h1>Login form</h1>
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
