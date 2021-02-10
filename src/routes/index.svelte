<script context="module">
  import { redirect } from "@sapper/app";
  export function preload({ params, query }) {
    return redirect(302, "work");
  }
</script>
