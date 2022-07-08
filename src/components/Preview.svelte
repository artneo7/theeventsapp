<script>
  import { formInputs } from '../stores';
  import { fly } from 'svelte/transition';

  $: if ($formInputs[0].type) {
    $formInputs[0].preview = true;
  }
</script>

{#if $formInputs[0].preview}
<section class:preview="{$formInputs[0].type}" transition:fly={{ y: -32 }}>
  <div class="preview__img"></div>

</section>
{/if}

<style>
  .preview {
    border: 2px dashed var(--g3);
    border-radius: 16px;
    padding: 32px;
    max-height: 360px;
    display: grid;
    justify-content: center;
  }
  .preview__img {
    border: 2px dashed var(--g3);
    border-radius: 50%;
    width: 120px;
    height: 120px;
  }
</style>