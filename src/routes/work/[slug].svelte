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

<div>
    <img src={data.keyImage.src} alt="{data.keyImage.alt}/" />
    <article>
        <h1>{data.title}</h1>
        <p>{data.text}</p>
    </article>
</div>

<style>
    article {
        grid-area: text;
        padding-top: var(--m);
        padding-left: var(--s);
        padding-right: var(--s);
        /* padding: 1.2em; */
    }

    /* div {
        display: flex;
        width: 100%;
        flex-direction: column;
    } */
    img {
        /* position: absolute;
        top: 0px;
        left: 0px; */
        grid-area: img;
        max-width: 100%;
        /* min-width: 0; */
    }
    /* h1 {
        grid-area: title;
    } */
    /* p {
        grid-area: text;
    } */
    div {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 30% auto auto;
        grid-template-areas:
            "img"
            "text"
            "slider";
        /* width: 100%;
        height: 100px; */
    }
</style>
