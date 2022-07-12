<script>
  import Form from '../components/Form.svelte';
  import Preview from '../components/Preview.svelte';
  import EventsList from '../components/EventsList.svelte';
</script>

<svelte:head>
  <title>TheEventsApp</title>
</svelte:head>

<main class="main">
  <div class="events wrap">
    <EventsList />
  </div>
  <div class="add-new wrap">
    <Form />
    <Preview />
  </div>
</main>

<style>
  .main {
    margin-top: 40px;
  }
  .add-new {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 20px;
  }
</style>
