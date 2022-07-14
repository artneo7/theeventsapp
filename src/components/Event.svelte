<script>
  export let event;
  
  import Modal from './Modal.svelte';
  import { eventSelected } from '../stores';
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

  const handleEventSelect = () => {
    $eventSelected = event.id;
  }
</script>

<div class="event" on:click="{handleEventSelect}" class:active="{$eventSelected === event.id}" class:blue="{event.category === 'Birthday'}" class:red="{event.category === 'Relationship'}" class:green="{event.category === 'Important'}">
  <img src="{icon}" alt="Party emoji" class="event__icon">
  <div class="event__circle" class:blue="{event.category === 'Birthday'}" class:red="{event.category === 'Relationship'}" class:green="{event.category === 'Important'}"></div>

  {#if event.img}
  <img src="{event.img}" alt="Image of {event.title}" class="event__img" class:blue="{event.category === 'Birthday'}" class:red="{event.category === 'Relationship'}" class:green="{event.category === 'Important'}">
  {/if}

  <h2 class="event__title">{event.title}</h2>

  <div class="update">
    <label class="btn__edit modal-button" for="edit-event"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#CBD5E0"/><path d="M21 15L17 11" stroke="#A0AEC0" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 22.5L8.5 23.5L9.5 18.5L19.5 8.5L23.5 12.5L13.5 22.5Z" stroke="#A0AEC0" stroke-linecap="round" stroke-linejoin="round"/></svg></label>
    <label class="btn__delete modal-button" for="delete-event"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#CBD5E0"/><path d="M10.5 13.5L11.365 22.149C11.4019 22.5191 11.5751 22.8623 11.8508 23.1119C12.1265 23.3615 12.4851 23.4999 12.857 23.5H19.143C19.5149 23.4999 19.8735 23.3615 20.1492 23.1119C20.4249 22.8623 20.5981 22.5191 20.635 22.149L21.5 13.5" stroke="#A0AEC0" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 11.5H23.5" stroke="#A0AEC0" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 11.5V8.5H18.5V11.5" stroke="#A0AEC0" stroke-linecap="round" stroke-linejoin="round"/></svg></label>
  </div>

  <span class="event__date">{event.date.slice(0, 5)}</span>

  <div class="event__type" class:blue="{event.category === 'Birthday'}" class:red="{event.category === 'Relationship'}" class:green="{event.category === 'Important'}">
    <span class="line-1"></span>
    <span class="line-2"></span>
    <span class="line-3"></span>
  </div>
</div>

{#if event.description && $eventSelected === event.id}
<section class="info">
  <img src="{event.img}" alt="Image of {event.title}" class="info__img">
  <div class="info__content">
    <span>30 years</span>
    <p>{event.description}</p>
  </div>
</section>
{/if}

<Modal id="delete-event">
  <h2>Are you sure that you want to delete the event?</h2>
  <div class="delete__btns">
    <button class="btn btn-primary" on:click="{getId}">Yes</button>
    <label for="delete-event" class="btn btn-outline">No</label>
  </div>
</Modal>

<Modal id="edit-event">
  <h2>Edit</h2>
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
  .event.active {
    border: 2px solid currentColor;
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
  .event__title {
    color: var(--g5);
    font-weight: bold;
  }
  .event__date {
    color: var(--g5);
    background-color: #fff;
    padding: 0px 12px;
    border-radius: 16px;
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
  .update {
    display: flex;
    gap: 8px;
    margin-left: auto;
    margin-right: 8px;
    opacity: 0;
    transform: translate3d(0, 4px, 0);
    transition: 450ms;
  }
  .event.active .update {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: 125ms;
  }
  .btn__edit:hover path {
    stroke: var(--g6);
  }
  .btn__edit:hover rect {
    stroke: var(--g5);
  }
  .btn__delete:hover path {
    stroke: var(--g6);
  }
  .btn__delete:hover rect {
    stroke: var(--g5);
  }
  .info {
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: 24px;
    padding: 32px 16px;
    background-color: #fff;
    border: 2px solid var(--g3);
    border-radius: 16px;
    margin-top: -12px;
    margin-bottom: 4px;
  }
</style>