<script lang="ts">
  import { onMount } from "svelte";
  import { themeStore } from "../nanostores/theme.ts";

  onMount(() => {
    const theme = localStorage.getItem("theme");

    if (!theme || theme === "none") {
      themeStore.set("dracula");
    }
  });
</script>

<!-- <main data-theme={$themeStore} class="">
  {#if $themeStore !== "none"} -->
<slot />
<!-- {/if}
</main> -->
