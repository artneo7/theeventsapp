<script>
  import { formInputs, uploadFiles } from '../stores';
  import { fly } from 'svelte/transition';
  import Error from './Error.svelte';
  let title = '';
  let date = '';
  let description = '';
  let error = '';

  $: if ($formInputs[0].type) {
    $formInputs[0].preview = true;
  }

  $: title = $formInputs[0].title;
  $: date = $formInputs[0].date;
  $: description = $formInputs[0].description;
  $: error = $formInputs[0].error;

  $: if (date) {
    date = date.slice(0, 5);
  }

  $: if (description) {
    description = description.slice(0, 150) + "…";
  }
</script>

<div class="preview-container">
  <Error {error} class="preview__alert" />

  {#if $formInputs[0].preview}
  <section class:preview="{$formInputs[0].type}" transition:fly={{ y: -32 }}>
    {#each $uploadFiles as file}
    <div class="preview__img preview__img--ok" style="background-image: url({URL.createObjectURL(file)})"></div>
    {:else}
    <div class="preview__img"></div>
    {/each}

    <span class="preview__title" in:fly="{{ y: -16, delay: 500 }}">{title}</span>
    <div class="preview__date" class:active={date}>{date}</div>
    <div class="preview__type" class:blue="{$formInputs[0].type === 'Birthday'}" class:red="{$formInputs[0].type === 'Relationship'}" class:green="{$formInputs[0].type === 'Important'}" in:fly="{{ x: 64, delay: 300 }}">
      <span class="line-1"></span>
      <span class="line-2"></span>
      <span class="line-3"></span>
    </div>
    <p class="preview__description" in:fly="{{ y: -16, delay: 700 }}">{description}</p>
  </section>
  {/if}
</div>


<style>
  .preview-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: -20px;
  }
  .preview {
    border: 2px dashed var(--g3);
    border-radius: 16px;
    padding: 32px;
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
  }
  .preview__img {
    border: 2px dashed var(--g3);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    background-color: var(--g1);
    z-index: 1;
  }
  .preview__img--ok {
    border: none;
    background-position: center;
    background-size: cover;
  }
  .preview__date {
    width: 68px;
    height: 24px;
    border: 2px dashed var(--g3);
    border-radius: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: var(--g1);
    z-index: 1;
  }
  .preview__date.active {
    color: var(--g5);
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: #fff;
  }
  .preview__title {
    color: var(--g5);
    margin-top: 24px;
    padding: 0 32px;
    text-align: center;
    font-weight: bold;
  }
  .preview__type {
    transform: rotate(-45deg);
    position: absolute;
    top: 0;
    right: -80px;
  }
  .preview__type .line-1 {
    display: block;
    width: 240px;
    height: 8px;
    background-color: currentColor;
  }
  .preview__type .line-2 {
    display: block;
    width: 240px;
    height: 4px;
    background-color: transparent;
  }
  .preview__type .line-3 {
    display: block;
    width: 240px;
    height: 16px;
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
  .preview__description {
    font-size: 0.875rem;
    color: var(--g5);
    margin-top: 8px;
    text-align: center;
  }
</style>