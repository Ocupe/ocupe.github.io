<script context="module">
  export function preload({ params, query }) {
    return this.fetch("https://cms.jonasschell.de/api/singletons/get/aboutMe")
      .then((r) => r.json())
      .then((data) => {
        return { data: data };
      });
  }
</script>

<script>
  export let data;
</script>

<svelte:head>
  <title>About | Jonas Schell</title>
</svelte:head>

<h1>About</h1>

{#if data}
  {@html data.text}
{/if}
