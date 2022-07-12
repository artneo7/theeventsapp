<script>
  export let event;
  
  import Modal from './Modal.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function getId() {
		dispatch('eventId', {
			id: event.id
		});
	}

  // Change icon based on category
  let icon;
  if (event.category === 'Birthday') icon = '/icon-birthday.png';
  if (event.category === 'Relationship') icon = '/icon-relationship.png';
  if (event.category === 'Important') icon = '/icon-important.png';
</script>

<div class="event">
  <img src="{icon}" alt="Party emoji" class="event__icon">
  <div class="event__circle" class:blue="{event.category === 'Birthday'}" class:red="{event.category === 'Relationship'}" class:green="{event.category === 'Important'}"></div>

  {#if event.img}
  <img src="{event.img}" alt="Image of {event.title}" class="event__img" class:blue="{event.category === 'Birthday'}" class:red="{event.category === 'Relationship'}" class:green="{event.category === 'Important'}">
  {/if}

  <h2>{event.title}</h2>

  <label class="btn modal-button" for="delete-event">Delete</label>

  <span class="event__date">{event.date.slice(0, 5)}</span>

  <div class="event__type" class:blue="{event.category === 'Birthday'}" class:red="{event.category === 'Relationship'}" class:green="{event.category === 'Important'}">
    <span class="line-1"></span>
    <span class="line-2"></span>
    <span class="line-3"></span>
  </div>
</div>

<Modal id="delete-event">
  <h2>Are you sure that you want to delete the event?</h2>
  <div class="delete__btns">
    <button class="btn btn-primary" on:click="{getId}">Yep, delete it</button>
    <label for="delete-event" class="btn btn-outline">Nah, nevermind</label>
  </div>
</Modal>

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
  .event__date {
    color: var(--g5);
    background-color: #fff;
    padding: 0px 12px;
    border-radius: 16px;
    margin-left: auto;
    margin-right: 20px;
    z-index: 1;
  }
  .event__type {
    transform: rotate(-45deg);
    position: absolute;
    top: 0;
    right: -108px;
  }
  .event__type .line-1 {
    display: block;
    width: 240px;
    height: 8px;
    background-color: currentColor;
  }
  .event__type .line-2 {
    display: block;
    width: 240px;
    height: 4px;
    background-color: transparent;
  }
  .event__type .line-3 {
    display: block;
    width: 240px;
    height: 16px;
    background-color: currentColor;
  }
</style>