<script>
  import { onMount } from 'svelte';
  // Need to check for cookie on SSR
  // import { getCookie } from '../helpers';

  let intro;
  // set cookie after first intro
  // document.cookie="intro=true"

  onMount(() => {
    document.cookie="intro=true";
    document.querySelector('body').style.overflow = 'hidden';

    setTimeout(() => {
      intro.style.top = '-100vh';

      setTimeout(() => {
        document.querySelector('body').style.overflow = 'initial';
      }, 1300);
    }, 1000);

  });
</script>

<div class="intro" bind:this={intro}>
  <h1 class="intro__text">TheEventsApp</h1>
</div>

<style>
  .intro {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #000;
    z-index: 9;
    transition: 1000ms;
  }
  .intro__text {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
  }
</style>