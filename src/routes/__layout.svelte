<script context="module">
  export async function load({session}) {
    return {
      props: {
        session
      }
    };
  }
</script>

<script>
  import '../app.css';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  export let session;
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap"
    rel="stylesheet"
  />
  <link rel="icon" type="image/svg" href="/logo.png" />
</svelte:head>

{#if session.isLoggedIn}
<Header />
{/if}
<slot />
<Footer />
