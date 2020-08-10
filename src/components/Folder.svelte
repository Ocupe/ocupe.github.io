<script>
  export let data = {
    slug: "modern-systems",
    title: "Modern Systems",
    keyImage: {
      src: "dummy/img2.jpg",
      alt: "Alt text off image",
    },
  };
</script>

<div class="container">
  <div class="card2" />
  <div class="card1" />
  <a href={`work/${data.slug}`}>
    <img src={data.keyImage.src} alt={data.keyImage.alt} />
    <h2>{data.title}</h2>
  </a>
</div>

<div class="clipped" />

<style>
  .container {
    height: 0;
    padding-bottom: 75%; /* 4:3 */
    position: relative;
    margin-bottom: var(--large);
  }
  .card1,
  .card2 {
    position: absolute;
    top: 15%;
    left: 15%;
    width: 80%;
    height: 70%;
    /* transform: scale(0.8, 0.6); */
    transition: all 0.3s ease-in-out;
    transform-origin: top left;
    background: blue;
  }
  .container:hover .card1 {
    transform-origin: top left;
    transform: rotate(-9.4deg);
  }
  .container:hover .card2 {
    background: red;
    transform-origin: top left;
    transform: rotate(-13.2deg);
  }
  h2 {
    /* background-image: url("stroke.svg");
    background-size: contain; */
    position: absolute;
    left: var(--small);
    bottom: var(--small);
    margin: 0px;
    background-color: white;
    padding-left: var(--small);
    padding-right: var(--normal);
    padding-top: var(--xxSmall);
    padding-bottom: var(--xxSmall);
    clip-path: url(#clip-stroke);
  }
  img {
    position: absolute;
    background: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* clip-path: polygon(33% 0, 38% 14%, 100% 14%, 100% 100%, 0 100%, 0 0); */
    clip-path: url(#clip-folder);
  }
</style>
