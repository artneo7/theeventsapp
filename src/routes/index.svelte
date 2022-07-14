<script>
  import Form from '../components/Form.svelte';
  import Preview from '../components/Preview.svelte';
  import EventsList from '../components/EventsList.svelte';
  import { EVENT_PUT } from '../api';

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('id', 86);
    formData.append('title', 'Test PUT Ok 2');
    const {url, options} = EVENT_PUT(formData, "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aGVldmVudHNhcHBhcGkudGVzdCIsImlhdCI6MTY1NzgwODUzOSwibmJmIjoxNjU3ODA4NTM5LCJleHAiOjE2NjA0MDA1MzksImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.HexfPKE1UyFIPcFHabB3gKa9DWlSnkV6EUGMAgRmqcU");
    fetch(url, options);
  }
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
