<script>
  import Form from '../components/Form.svelte';
  import Preview from '../components/Preview.svelte';
  import EventsList from '../components/EventsList.svelte';
  import { editMode } from '../stores';
  import autoAnimate from '@formkit/auto-animate';
</script>

<svelte:head>
  <title>TheEventsApp</title>
</svelte:head>

<main class="main" use:autoAnimate>
  {#if $editMode === true}
  <div class="add-new wrap">
    <Form />
    <Preview />
  </div>
  {/if}

  <div class="events wrap">
    <EventsList />
  </div>
</main>

<style>
  .main {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .add-new {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 20px;
    width: 100%;
  }
  .events {
    width: 100%;
  }
</style>
