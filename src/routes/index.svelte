<script>
  import Folder from "../components/Folder.svelte";
  import { dataset_dev, get_slot_context } from "svelte/internal";
  import { goto } from "@sapper/app";
  const redirect = async () => {
    await goto("/work");
  };
  redirect();
</script>

<style>
</style>
