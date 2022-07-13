<script>
  import { focusLogin } from '../stores';

  export let id;
</script>

<!-- The button to open modal -->
<!-- <label for="{id}" class="btn modal-button">open modal</label> -->

<!-- Put this part before </body> tag -->
<input type="checkbox" id="{id}" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="{id}" class="btn btn-sm btn-circle btn-outline absolute right-2 top-2" on:click="{() => $focusLogin = false}">✕</label>
    <slot />
  </div>
</div>
