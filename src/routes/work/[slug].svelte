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
    export let data;
</script>

<img src={data.keyImage.src} alt="{data.keyImage.alt}/" />

<h1>{data.title}</h1>

<style>
    div {
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    img {
        /* position: absolute;
        top: 0px;
        left: 0px; */
        width: 100%;
    }
    h1 {
        position: absolute;
        top: 200px;
        left: 30px;
        width: 300px;
    }
</style>
