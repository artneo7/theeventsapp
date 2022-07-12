<script>
  import { EVENTS_GET } from '../api';
  import { getCookie } from '../helpers';
  import { onMount } from 'svelte';
  import { session } from '$app/stores';
  import Event from './Event.svelte';

  let error;
  let data;

  let events = [];
  onMount(() => {
    const { url, options } = EVENTS_GET($session.token);
  
    fetch(url, options).then((response) => {
      return response.json();
    }).then((data) => {
      return events = data;
    })
  });
</script>

{#if $session.isLoggedIn}
<h1>Events List</h1>
{#each events as event}
  <Event {event} />
{/each}
{/if}