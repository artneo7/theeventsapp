<script>
  import { imask } from 'svelte-imask';

  export let label;
  export let placeholder = '';
  export let value = '';
  export let mask = false;

  const options = { 
		mask: mask
	};

  function complete({ detail: imask }) {
		console.log('completed', imask);
	}
</script>

<div class="form-control w-full">
  {#if mask}
  <label class="label">
    <span class="label-text">{label}</span>
    <input bind:value on:input type="text" {placeholder} class="input input-bordered w-full" use:imask={options} on:complete={complete} />
  </label>
  {:else}
  <label class="label">
    <span class="label-text">{label}</span>
    <input bind:value on:input type="text" {placeholder} class="input input-bordered w-full" />
  </label>
  {/if}
</div>

<style>
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
  .label-text {
    display: block;
    color: var(--g5);
    font-weight: bold;
    margin-bottom: 8px;
  }
</style>