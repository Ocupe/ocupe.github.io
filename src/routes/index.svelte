<script>
  import Folder from "../components/Folder.svelte";

  let works = [
    {
      slug: "modern-systems",
      title: "Modern Systems",
      keyImage: {
        src: "dummy/img2.jpg",
        alt: "Alt text off image",
      },
    },
    {
      slug: "modern-systems",
      title: "Processing Sketches",
      keyImage: {
        src: "dummy/img3.jpg",
        alt: "Alt text off image",
      },
    },
    {
      title: "Modern Sisyphus",
      slug: "modern-sisyphus",
      keyImage: {
        src: "dummy/img4.jpg",
        alt: "Alt text off image",
      },
    },
    {
      slug: "modern-systems",
      title: "Modern Systems",
      keyImage: {
        src: "dummy/img1.png",
        alt: "Alt text off image",
      },
    },
  ];
</script>

<svelte:head>
  <title>Jonas Schell | Work</title>
</svelte:head>

<div>
  {#each works as data}
    <Folder {data} />
  {/each}
</div>
<svg>

  <clipPath id="folder" clipPathUnits="objectBoundingBox">
    <path
      d="M0,0.96 V0.052 C0,0.023,0.017,0,0.037,0 H0.285 C0.305,0,0.321,0.029,0.334,0.053
      C0.349,0.08,0.356,0.104,0.388,0.104 H0.969 C0.986,0.104,1,0.122,1,0.144 V0.96
      C1,0.982,0.986,1,0.969,1 H0.031 C0.014,1,0,0.982,0,0.96" />
  </clipPath>
</svg>

<style>
  svg {
    width: 0px;
    height: 0px;
    /* display:none; */
  }
  div {
    /* width: 100%; */
    /* display: flex;
    flex-direction: column;
    align-items: center; */
  }
</style>
