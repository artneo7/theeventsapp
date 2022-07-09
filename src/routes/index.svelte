<script>
  import Form from '../components/Form.svelte';
  import Preview from '../components/Preview.svelte';
  import {TOKEN_POST, EVENT_POST, TOKEN_VALIDATE_POST} from '../api';
  import {formInputs} from '../stores';
  import { getCookie } from '../helpers';
</script>

<svelte:head>
  <title>TheEventsApp</title>
</svelte:head>

<main class="main">
  <div class="main__wrapper wrap">
    <Form />
    <Preview />
  </div>
</main>

<style>
  .main {
    margin-top: 40px;
  }
  .main__wrapper {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 20px;
  }
</style>
