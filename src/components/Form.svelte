<script>
  import autoAnimate from '@formkit/auto-animate';
  import { editMode, formInputs, step, uploadFiles, eventsList } from '../stores';
  import Input from '../components/Input.svelte'
  import Success from '../components/Success.svelte'
  import { EVENT_POST } from '../api';
  import { getCookie } from '../helpers';

  let currentEvent;
  $: if (currentEvent) {
    $formInputs[0].type = currentEvent;
  }

  let loading;
  let handlePost = async (e) => {
    e.preventDefault();

    if (!$formInputs[0].title.trim()) return $formInputs[0].error = 'Please add the event name';
    if ($formInputs[0].date.trim().length !== 10) return $formInputs[0].error = 'Please add the event date';

    const formData = new FormData();
    formData.append('type', $formInputs[0].type);
    formData.append('title', $formInputs[0].title);
    formData.append('date', $formInputs[0].date);
    formData.append('description', $formInputs[0].description);
    if (files) {
      formData.append('img', files[0]);
    }

    loading = true;
    const token = getCookie('session');
    const {url, options} = EVENT_POST(formData, token);

    try {
      await fetch(url, options).then((response) => {
        return response.json();
      }).then((json) => {
        if (json.id) {
          $eventsList = [{
            id: json.id,
            category: json.category,
            title: json.post_title,
            date: json.meta_input.date,
            description: json.post_content,
            img: json.img
          }, ...$eventsList]
        }
        if (json.code) {
          $formInputs[0].error = json.message;
        }
      })
    } catch(err) {
      if (err instanceof TypeError) {
        err = "Something went wrong… please contact the developer";
        $formInputs[0].error = err;
        loading = false;
      } else {
        $formInputs[0].error = err;
        loading = false;
      }
    } finally {
      loading = false;
    }
  }

  let handleStep = (e) => {
    e.preventDefault();
    if (!$formInputs[0].type) return $formInputs[0].error = 'Please select an event type';
    $step = 2;
  }

  let handleClose = (e) => {
    e.preventDefault();
    $editMode = false;
    $step = 1;
    currentEvent = null;
    $formInputs[0].preview = null;
    $formInputs[0].type = '';
    $formInputs[0].title = '';
    $formInputs[0].date = '';
    $formInputs[0].description = '';
    $uploadFiles = [];
  }

  let files = [];
  let handleImagePreview = () => {
    $uploadFiles = files;
  }

  const checkLength = (e) => {
    const length = e.target.value.length;
    if (length === 330) {
      $formInputs[0].error = "Maximum number of 330 characters reached";
    }
  }
</script>

<form class="form">
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

    {#if $step === 1}
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


    {#if $step === 1}
    <Input bind:value={$formInputs[0].title} label="Event name" placeholder="Type the event name here" class="required" />
    <Input bind:value={$formInputs[0].date} label="Date" mask="00/00/0000" maxlength="10" placeholder="Type the event date here" class="required padding-bottom" />
    {:else if $step === 2}
      {#if $uploadFiles.length === 0}
      <Input bind:files on:change="{handleImagePreview}" label="Image" type="file" name="img" id="img" class="form__img" />
      {:else}
      <Success message="Image added successfully 🎉" text="Image" class="gap" />
      {/if}
    <Input bind:value={$formInputs[0].description} on:input="{checkLength}" label="Description" type="textarea" placeholder="Type the event description here" maxlength="330" />
    {/if}

    <div class="form__group">
      <ul class="steps">
        <li data-content="1" class="step step-neutral"></li>
        <li data-content="2" class="step" class:step-neutral={$step === 2}></li>
      </ul>
      {#if $step === 2}
      <button class="btn btn-outline btn__return" on:click="{() => $step = 1}">Return</button>
      <button type="submit" class="btn btn-primary btn__publish" on:click="{handlePost}" class:loading={loading}>Publish</button>
      {:else if $step === 1}
      <button class="btn btn-outline btn__next" on:click="{handleStep}">Next</button>
      {/if}
    </div>
  </div>

  <button class="btn btn-sm btn-circle btn-outline form__btn" on:click="{handleClose}">✕</button>

</form>

<style>
  .form {
    position: relative;
  }
  .form__wrapper {
    min-height: 471px;
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
    color: var(--g6);
    cursor: pointer;
    user-select: none;
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
    position: absolute;
    right: 151px;
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
  .btn__next {
    margin-left: auto;
  }
  .btn__publish {
    margin-left: auto;
  }
</style>
