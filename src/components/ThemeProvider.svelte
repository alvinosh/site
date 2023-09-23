<script lang="ts">
  import { themeStore } from "../nanostores/theme.ts";
</script>

<main
  data-theme={$themeStore}
  class="bg-background w-screen min-h-screen overflow-y-auto overflow-x-hidden m-0 pt-10"
>
  {#if $themeStore}
    <slot />
  {/if}
</main>
