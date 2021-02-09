<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<Nav {segment} />

<main>
  <div class="page">
    <slot />
  </div>
</main>

<style>
  main {
    position: relative;
    width: 100%;
    max-width: 35em;
    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .page {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    max-width: 600px;
    padding-left: var(--xs);
    padding-right: var(--xs);
    box-sizing: border-box;
    padding-top: var(--s);
  }
</style>
