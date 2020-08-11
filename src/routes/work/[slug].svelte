<script context="module">
    export async function preload({ params, query }) {
        // the `slug` parameter is available because
        // this file is called [slug].svelte
        const res = await this.fetch(`work/${params.slug}.json`);
        const data = await res.json();

        if (res.status === 200) {
            return { data: data };
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<script>
    import { Swipe, SwipeItem } from "svelte-swipe"; // gzipped 3.37 KB
    export let data;

    let autoplay = false;
    let delay = 2000; //ms
    let showIndicators = true;
    let transitionDuration = 1000; //ms
    let defaultIndex = 0; //start from 0
</script>

<div class="swipe-holder">
    <Swipe {showIndicators} {autoplay} {delay} {transitionDuration} {defaultIndex}>
        <SwipeItem>
            <img src={data.keyImage.src} alt={data.keyImage.alt} />
        </SwipeItem>
        <SwipeItem>
            <img src="dummy/img2.jpg" alt={data.keyImage.alt} />
        </SwipeItem>
        <SwipeItem>
            <img src="dummy/img3.jpg" alt={data.keyImage.alt} />
        </SwipeItem>
    </Swipe>
</div>

<!-- <img src={data.keyImage.src} alt="{data.keyImage.alt}/" />

<h1>{data.title}</h1> -->

<style>
    .swipe-holder {
        height: 30vh;
        width: 100%;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    /* div {
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    h1 {
        position: absolute;
        top: 200px;
        left: 30px;
        width: 300px;
    } */
</style>
