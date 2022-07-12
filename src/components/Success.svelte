<script>
  export let message = '';
  export let text = '';
</script>

<div class="success {$$props.class}">
  {#if text}
  <span class="text">{text}</span>
  {/if}
  <div class="alert alert-success">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>{message}</span>
    </div>
  </div>
</div>

<style>
  .text {
    display: block;
    color: var(--g5);
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 0.875rem;
  }
  .alert {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .gap {
    margin-top: 19px;
  }
</style>