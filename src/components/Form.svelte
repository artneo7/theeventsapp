<script>
  import autoAnimate from '@formkit/auto-animate';
  import {editMode, formInputs} from '../stores';
  import Input from '../components/Input.svelte'
  import { EVENT_POST } from '../api';
  import { getCookie } from '../helpers';
  
  let currentEvent;
  $: if (currentEvent) {
    $formInputs[0].type = currentEvent;
  }

  let handlePost = () => {
    if (!$formInputs[0].title.trim()) {
      return $formInputs[0].error = 'Please add the event name';
    }

    const formData = new FormData();
    formData.append('type', $formInputs[0].type);
    formData.append('title', $formInputs[0].title);
    formData.append('date', $formInputs[0].date);
    formData.append('description', $formInputs[0].description);

    const token = getCookie('session');
    const {url, options} = EVENT_POST(formData, token);
    fetch(url, options).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json();
    });
  }

  let handleStep = () => {
    if (!$formInputs[0].type) return $formInputs[0].error = 'Please select an event type';
    $formInputs[0].step = 2;
  }

  let handleClose = () => {
    $editMode = false;
    currentEvent = null;
    $formInputs[0].type = null;
    $formInputs[0].preview = null;
  }
</script>

<section class="form">
  <div class="form__wrapper">
    <ul use:autoAnimate>
      <li>Add a new</li>
      {#if $formInputs[0].type}
        <li
          class:blue={$formInputs[0].type === 'Birthday'}
          class:red={$formInputs[0].type === 'Relationship'}
          class:green={$formInputs[0].type === 'Important'}
        >
          &nbsp;{$formInputs[0].type}
        </li>
      {/if}
      <li>&nbsp;event</li>
    </ul>

    {#if $formInputs[0].step === 1}
    <div class="types">
      <div class="type">
        <input
          bind:group="{currentEvent}"
          value="Birthday"
          on:change={() => ($formInputs[0].type = 'Birthday')}
          class="radio"
          type="radio"
          name="type"
          id="birthday"
          class:blue={$formInputs[0].type === 'Birthday'}
        />
        <label for="birthday" class="type__label">Birthday</label>
      </div>
      <div class="type">
        <input
          bind:group="{currentEvent}"
          value="Relationship"
          on:change={() => ($formInputs[0].type = 'Relationship')}
          class="radio"
          type="radio"
          name="type"
          id="relationship"
          class:red={$formInputs[0].type === 'Relationship'}
        />
        <label for="relationship" class="type__label">Relationship</label>
      </div>
      <div class="type">
        <input
          bind:group="{currentEvent}"
          value="Important"
          on:change={() => ($formInputs[0].type = 'Important')}
          class="radio"
          type="radio"
          name="type"
          id="important"
          class:green={$formInputs[0].type === 'Important'}
        />
        <label for="important" class="type__label">Important</label>
      </div>
    </div>
    {/if}


    {#if $formInputs[0].step === 1}
    <Input bind:value={$formInputs[0].title} label="Event name" placeholder="Type the event name here" />
    <Input bind:value={$formInputs[0].date} label="Date" mask="00/00/0000" maxlength="10" placeholder="Type the event date here" />
    {:else if $formInputs[0].step === 2}
    <Input label="Image" type="file" name="img" id="img" class="form__img" />
    <Input bind:value={$formInputs[0].description} label="Description" type="textarea" placeholder="Type the event description here" />
    {/if}

    <div class="form__group">
      <ul class="steps">
        <li data-content="1" class="step step-neutral"></li>
        <li data-content="2" class="step" class:step-neutral={$formInputs[0].step === 2}></li>
      </ul>
      {#if $formInputs[0].step === 2}
      <button class="btn btn-outline btn__return" on:click="{() => $formInputs[0].step = 1}">Return</button>
      <button class="btn btn-primary btn__publish" on:click="{handlePost}">Publish</button>
      {:else if $formInputs[0].step === 1}
      <button class="btn btn-outline btn__step" on:click="{handleStep}">Next</button>
      {/if}
    </div>
  </div>

  <button class="btn btn-sm btn-circle btn-outline form__btn" on:click="{handleClose}">✕</button>

</section>

<style>
  .form {
    position: relative;
  }
  .form__wrapper {
    min-height: 460px;
    padding: 32px;
    background-color: #fff;
    border-radius: 16px;
    border: 2px solid var(--g3);
  }
  ul {
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    color: var(--g5);
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
  .form__group {
    margin-top: 32px;
    gap: 24px;
    display: flex;
    align-items: center;
  }
  .steps {
    margin-left: auto;
  }
  .step {
    min-width: 52px;
  }
  .step::before {
    background-color: var(--g3);
    max-width: 32px;
  }
  .step::after {
    color: var(--g5);
    background-color: var(--g3);
  }
  .step-neutral::after {
    color: #fff;
    background-color: var(--g5);
  }
  .steps .step-neutral + .step-neutral:before {
    background-color: var(--g5);
  }
  .btn__return {
    order: -1;
  }
</style>
