<script>
  import autoAnimate from '@formkit/auto-animate';
  import {editMode, formInputs} from '../stores/store';
  import Input from '../components/Input.svelte'

  let eventType;
  let eventName;
  let eventDate;

  $: $formInputs.name = eventName;
  $: $formInputs.date = eventDate;
</script>

<button on:click="{() => $formInputs.type = "Birthday"}">Click here</button>

<ul style="display: grid">
  <li>Type: {$formInputs.type}</li>
  <li>Name: {$formInputs.name}</li>
  <li>Date: {$formInputs.date}</li>
</ul>


<section class="form">
  <div class="form__wrapper">
    <ul use:autoAnimate>
      <li>Add a new</li>
      {#if eventType}
        <li
          class:blue={eventType === 'Birthday'}
          class:red={eventType === 'Relationship'}
          class:green={eventType === 'Important'}
        >
          &nbsp;{eventType}
        </li>
      {/if}
      <li>&nbsp;event</li>
    </ul>

    <div class="types">
      <div class="type">
        <input
          on:change={() => (eventType = 'Birthday')}
          class="radio"
          type="radio"
          name="type"
          id="birthday"
          class:blue={eventType === 'Birthday'}
        />
        <label for="birthday" class="type__label">Birthday</label>
      </div>
      <div class="type">
        <input
          on:change={() => (eventType = 'Relationship')}
          class="radio"
          type="radio"
          name="type"
          id="relationship"
          class:red={eventType === 'Relationship'}
        />
        <label for="relationship" class="type__label">Relationship</label>
      </div>
      <div class="type">
        <input
          on:change={() => (eventType = 'Important')}
          class="radio"
          type="radio"
          name="type"
          id="important"
          class:green={eventType === 'Important'}
        />
        <label for="important" class="type__label">Important</label>
      </div>
    </div>

    <Input bind:value={eventName} label="Event name" placeholder="Type the event name here" />

    <Input bind:value={eventDate} label="Date" mask="00/00/0000" />
  </div>

  <button class="btn btn-circle btn-outline form__btn" on:click="{() => $editMode = false}">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
  </button>
</section>

<style>
  .form {
    position: relative;
  }
  .form__wrapper {
    padding: 32px;
    background-color: #fff;
    border-radius: 16px;
    border: 2px solid var(--g3);
  }
  ul {
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    color: var(--g6);
  }
  .types {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    margin-top: 24px;
  }
  .type {
    font-size: 0.875rem;
    color: var(--g5);
    font-weight: bold;
    display: flex;
    gap: 6px;
  }
  .type__label {
    cursor: pointer;
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
  .form__btn {
    position: absolute;
    top: 16px;
    right: 16px;
  }
  input#relationship {
    --tw-ring-color: var(--relationship);
  }
  input#important {
    --tw-ring-color: var(--important);
  }
</style>
