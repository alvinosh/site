<script lang="ts">
  import { themeStore } from "./../nanostores/theme.ts";
  import Modal from "./Modal.svelte";
  import { themes } from "../config/themes";
  import { snakeToTitleCase } from "../util/textTransform";

  export let className = "";

  let modal = false;

  const toggleModal = () => {
    modal = !modal;
  };

  const entries = Object.entries(themes);
</script>

<button
  on:click={toggleModal}
  class={`w-8 h-8 m-4 fill-foreground ${className}`}
>
  <svg aria-hidden="true" viewBox="0 0 24 24" tabindex="-1"
    ><path
      d="M20 15.31 23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"
    /></svg
  >
</button>

<Modal showModal={modal}>
  <h2 slot="header">Theme</h2>
  <ul>
    {#each entries as theme}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <li
        on:click={() => themeStore.set(theme[0])}
        class="flex flex-row p-4 gap-8 cursor-pointer hover:bg-comment"
      >
        <div class="flex flex-col justify-between">
          <span class="text-sm text-foreground"
            >{snakeToTitleCase(theme[0])}</span
          >
          <div class="flex flex-row">
            {#each Object.entries(theme[1]) as color}
              <div
                style={`background-color: ${color[1]}`}
                class="w-4 h-4 md:w-6 md:h-6"
              />
            {/each}
            <div
              class={`w-4 h-4 md:w-6 md:h-6 ml-8 border-foreground text-foreground rounded-full relative ${
                $themeStore === theme[0] ? "bg-orange border-0" : "border-2"
              }`}
            />
          </div>
        </div>
      </li>
    {/each}
  </ul>
</Modal>
