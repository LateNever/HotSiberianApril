<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import MyCounter from './lib/MyCounter.svelte';
</script>

<main>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>

  <div>
    <MyCounter />
  </div>


</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

</style>
