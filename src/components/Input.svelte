<script>
  import { imask } from 'svelte-imask';

  export let label = '';
  export let placeholder = '';
  export let value = '';
  export let mask = false;
  export let maxlength;

  export let type = 'text';
  const setType = (node) => {
    node.type = type;
  };

  const options = { 
		mask: mask
	};

  function complete({ detail: imask }) {
		console.log('completed', imask);
	}
</script>

<div class="form-control w-full {$$props.class}">
  {#if mask}
  <label class="label">
    <span class="label-text">{label}</span>
    <input bind:value on:input use:setType {placeholder} class="input input-bordered w-full" use:imask={options} on:complete={complete} {maxlength} />
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
    display: block;
    padding: 0;
  }
  .form-control input {
    color: var(--g6);
    border-color: var(--g3);
  }
  .form-control input:focus {
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
</style>