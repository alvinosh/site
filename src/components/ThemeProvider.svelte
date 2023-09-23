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

<main
  data-theme={$themeStore}
  class="bg-background w-screen min-h-screen overflow-y-auto overflow-x-hidden m-0 pt-10"
>
  {#if $themeStore !== "none"}
    <slot />
  {/if}
</main>
