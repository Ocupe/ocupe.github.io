<script context="module">
  export function preload({ params, query }) {
    return this.fetch("https://cms.jonasschell.de/api/collections/get/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filter: { published: true },
        fields: { title: true, title_slug: true, images: true },
        // limit: 10,
        // skip: 5,
        sort: { year: -1 },
        // populate: 1, // resolve linked collection items
        // lang: "de", // return normalized language fields (fieldA_de => fieldA)
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        return { works: data.entries };
      });
  }
</script>

<script>
  import Folder from "../../components/Folder.svelte";
  import { fade } from "svelte/transition";
  export let works;
</script>

<svelte:head>
  <title>Jonas Schell | Work</title>
</svelte:head>

{#each works as work}
  <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
  <Folder data={work} />

{/each}

<style>
  svg {
    width: 0px;
    height: 0px;
  }
</style>
