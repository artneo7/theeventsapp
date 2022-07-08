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

<div class="form-control w-full">
  {#if mask}
  <label class="label">
    <span class="label-text">{label}</span>
    <input bind:value on:input use:setType {placeholder} class="input input-bordered w-full" use:imask={options} on:complete={complete} {maxlength} />
  </label>
  {:else}
  <label class="label">
    <span class="label-text">{label}</span>
    <input bind:value on:input use:setType {placeholder} class="input input-bordered w-full" />
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
</style>