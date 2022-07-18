<script>
  import { onMount } from 'svelte';

  export let time = 300;
  let intro;
  let logo__img;
  let logo__1;
  let logo__2;
  let logo__3;
  let intro__blue;
  let intro__red;
  let intro__green;
  let intro__gray;

  onMount(() => {
    document.cookie="intro=true";
    document.querySelector('body').style.overflow = 'hidden';

    setTimeout(() => {
      setTimeout(() => {
        logo__img.style.opacity = 1;
        logo__img.style.transform = 'translate3d(0, 0, 0)';
      }, time);
      setTimeout(() => {
        logo__1.style.opacity = 1;
        logo__1.style.transform = 'translate3d(0, 0, 0)';
      }, time + 100);
      setTimeout(() => {
        logo__2.style.opacity = 1;
        logo__2.style.transform = 'translate3d(0, 0, 0)';
      }, time + 200);
      setTimeout(() => {
        logo__3.style.opacity = 1;
        logo__3.style.transform = 'translate3d(0, 0, 0)';
      }, time + 300);

      setTimeout(() => {
        intro__blue.style.bottom = 0;
        intro__blue.style.left = 0;
      }, time + 1000);

      setTimeout(() => {
        intro__red.style.bottom = "-10px";
        intro__red.style.left = "-10px";
      }, time + 1300);

      setTimeout(() => {
        intro__green.style.bottom = "-20px";
        intro__green.style.left = "-20px";
      }, time + 1600);

      setTimeout(() => {
        intro__gray.style.bottom = "-30px";
        intro__gray.style.left = "0";
      }, time + 1900);

      setTimeout(() => {
        intro.style.top = 'calc(-100% - 60px)';
      }, time + 2200);

      setTimeout(() => {
        document.querySelector('body').style.overflow = 'initial';
      }, time + 3100);
    });
  });
</script>

<div class="intro" bind:this={intro}>
  <h1 class="logo">
    <img src="/logo.png" alt="TheEventsApp logo" class="logo__img" bind:this={logo__img} />
    <span class="logo__1" bind:this={logo__1}>The</span>
    <span class="logo__2" bind:this={logo__2}>Events</span>
    <span class="logo__3" bind:this={logo__3}>App</span>
  </h1>
  <div class="intro__blue" bind:this={intro__blue}></div>
  <div class="intro__red" bind:this={intro__red}></div>
  <div class="intro__green" bind:this={intro__green}></div>
  <div class="intro__gray" bind:this={intro__gray}></div>
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
    background-color: var(--g1);
    z-index: 9;
    display: grid;
    align-items: center;
    justify-content: center;
    transition: 1000ms;
  }
  .logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: var(--feat);
    font-weight: bold;
    z-index: 1;
  }
  .logo__img {
    margin-right: 8px;
    max-width: 36px;
    opacity: 0;
    transform: translate3d(0, 8px, 0);
    transition: 300ms;
  }
  .logo__1 {
    opacity: 0;
    transform: translate3d(0, 8px, 0);
    transition: 300ms;
  }
  .logo__2 {
    opacity: 0;
    transform: translate3d(0, 8px, 0);
    transition: 300ms;
  }
  .logo__3 {
    opacity: 0;
    transform: translate3d(0, 8px, 0);
    transition: 300ms;
  }
  .intro__blue {
    background-color: var(--birthday);
    width: 100%;
    height: 100vh;
    position: absolute;
    bottom: -100vh;
    left: -100vh;
    transition: 400ms;
  }
  .intro__red {
    background-color: var(--relationship);
    width: 100%;
    height: 100vh;
    position: absolute;
    bottom: -100vh;
    left: -100vh;
    transition: 400ms;
  }
  .intro__green {
    background-color: var(--important);
    width: 100%;
    height: 100vh;
    position: absolute;
    bottom: -100vh;
    left: -100vh;
    transition: 400ms;
  }
  .intro__gray {
    background-color: var(--g1);
    width: 100%;
    height: 100vh;
    position: absolute;
    bottom: -100vh;
    left: -100vh;
    transition: 400ms;
  }
</style>