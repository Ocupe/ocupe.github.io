<script>
    import Nav from "../components/Nav.svelte";

    export let segment;
</script>

<Nav {segment} />

<main>
    <slot />
</main>

<style>
    main {
        position: relative;
        width: 100%;
        max-width: 35em;
        background-color: white;
        padding: 0;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>
