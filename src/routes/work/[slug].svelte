<script context="module">
  export function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    return this.fetch("https://cms.jonasschell.de/api/collections/get/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // filter: { published: true,  },
        filter: { published: true, title_slug: params.slug },
        // fields: { title: true, images: true },
        limit: 1,
        // skip: 5,
        // sort: { year: -1 },
        // populate: 1, // resolve linked collection items
        // lang: "de", // return normalized language fields (fieldA_de => fieldA)
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        return { data: data.entries[0], slug: params.slug };
      });
  }
</script>

<script>
  export let data;
  console.log("data", data);
</script>

<div>
  <img src={"https://cms.jonasschell.de" + data.images[0].path} alt="" />
  <article>
    <h1>{data.title}</h1>
    {@html data.description}
    {#each data.images as { path, title }}
      <img src={"https://cms.jonasschell.de" + path} alt={title} />
    {/each}
  </article>
</div>

<style>
  div {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 30% auto auto;
    grid-template-areas:
      "img"
      "text"
      "slider";
    grid-gap: var(--s);
  }
  article {
    grid-area: text;
    padding-top: var(--m);
    padding-left: var(--s);
    padding-right: var(--s);
  }
  img {
    grid-area: img;
    width: 100vw;
    height: 30vh;
    object-fit: cover;
    padding-left: -var(--xs);
    place-self: center;
  }
</style>
