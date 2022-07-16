<script>
  import { EVENTS_GET, EVENT_DELETE } from '../api';
  import { onMount } from 'svelte';
  import { session } from '$app/stores';
  import Event from './Event.svelte';
  import Skeleton from './Skeleton.svelte';
  import autoAnimate from '@formkit/auto-animate';
  import { eventsList } from '../stores';

  let skeleton;

  const fetchEvents = async () => {
    if (!$session.token) return;    
    skeleton = true;
    try {
      const { url, options } = EVENTS_GET($session.token);
      await fetch(url, options).then((response) => {
        return response.json();
      }).then((data) => {
        skeleton = false;
        return $eventsList = data;
      });
    } catch(err) {
      skeleton = false;
    } finally {
      skeleton = false;
    }
  }
  
  onMount(() => {
    fetchEvents();
  });

  const handleDelete = async (event) => {
    try {
      const { url, options } = EVENT_DELETE(event.detail.id, $session.token);
      await fetch(url, options).then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        $eventsList = $eventsList.filter((e) => e.id !== event.detail.id);
      });
    } catch(err) {
      loading = false;
    } finally {
      loading = false;
    }
	}
</script>

{#if skeleton}
<Skeleton />
{/if}

{#if $session.isLoggedIn}
<div class="events" use:autoAnimate>
  {#each $eventsList as event (event.id)}
    <Event {event} on:eventId="{handleDelete}" />
  {/each}
</div>
{/if}

<style>
  .events {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>