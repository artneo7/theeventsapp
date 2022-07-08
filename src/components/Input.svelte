<script>
  import { imask } from 'svelte-imask';

  export let label = '';
  export let placeholder = '';
  export let value = '';
  export let mask = false;
  export let maxlength = null;

  export let type = 'text';
  const setType = (node) => {
    node.type = type;
  };

  const options = { 
		mask: mask
	};
</script>

<div class="form-control w-full {$$props.class}">
  {#if mask}
  <label class="label">
    <span class="label-text">{label}</span>
    <input bind:value on:input use:setType {placeholder} class="input input-bordered w-full" use:imask={options} {maxlength} />
  </label>
  {:else if type === 'file'}
  <label class="label">
    <span class="label-text">{label}</span>
    <input bind:value on:input use:setType {placeholder} class="input input-bordered w-full form__file" id="file_input" type="file" {maxlength}>
  </label>
  {:else if type === 'textarea'}
  <label class="label">
    <span class="label-text">{label}</span>
    <textarea class="textarea textarea-bordered w-full"></textarea>
  </label>
  {:else}
  <label class="label">
    <span class="label-text">{label}</span>
    <input bind:value on:input use:setType {placeholder} class="input input-bordered w-full" {maxlength}/>
  </label>
  {/if}
</div>

<style>
  .label-text {
    display: block;
    color: var(--g5);
    font-weight: bold;
    margin-bottom: 8px;
  }
  label.label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
  .form-control input,
  .form-control textarea {
    color: var(--g6);
    border-color: var(--g3);
  }
  .form-control input:focus,
  .form-control textarea:focus {
    --tw-ring-color: var(--g2);
    border-color: var(--g2);
  }
  .form-control {
    margin-top: 20px;
    padding: 20px 0 0;
    position: relative;
  }
  .form-control::before {
    content: '';
    display: block;
    height: 2px;
    width: calc(100% + 64px);
    background-color: var(--g1);
    position: absolute;
    top: 0;
    left: -32px;
  }
  .form__img.form-control {
    margin-top: 0;
  }
  .form__img.form-control::before {
    content: initial;
  }
  .form__login.form-control {
    margin-top: 0;
    padding-top: 0;
  }
  .form__login.form-control::before {
    content: initial;
  }
  .form__file {
    color: var(--g6);
    --tw-border-opacity: 1;
    padding-top: 8px;
    cursor: pointer;
  }
  ::file-selector-button {
    background-color: transparent;
    border: none;
    display: none;
  }
  .form-control textarea {
    min-height: 115px;
  }
</style>