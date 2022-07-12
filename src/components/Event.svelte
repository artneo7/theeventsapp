<script>
  import { fly } from 'svelte/transition';

  export let event;

  // Change icon based on category
  let icon;
  if (event.category === 'Birthday') icon = '/icon-birthday.png';
  if (event.category === 'Relationship') icon = '/icon-relationship.png';
  if (event.category === 'Important') icon = '/icon-important.png';
</script>

<div class="event" transition:fly={{ y: -16 }}>
  <img src="{icon}" alt="Party emoji" class="event__icon">
  <div class="event__circle" class:blue="{event.category === 'Birthday'}" class:red="{event.category === 'Relationship'}" class:green="{event.category === 'Important'}"></div>

  {#if event.img}
  <img src="{event.img}" alt="Image of {event.title}" class="event__img" class:blue="{event.category === 'Birthday'}" class:red="{event.category === 'Relationship'}" class:green="{event.category === 'Important'}">
  {/if}

  <h2>{event.title}</h2>
</div>

<style>
  .event {
    min-height: 68px;
    background-color: #fff;
    border: 2px solid var(--g3);
    border-radius: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    position: relative;
    overflow: hidden;
  }
  .event__icon {
    max-width: 40px;
    margin-left: 20px;
    z-index: 1;
  }
  .event__circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    bottom: -40px;
    left: -26px;
    background-color: currentColor;
  }
  .blue {
    color: var(--birthday);
  }
  .red {
    color: var(--relationship);
  }
  .green {
    color: var(--important);
  }
  .event__img {
    max-width: 40px;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px currentColor;
  }
</style>