<script lang="ts">
  export let showModal: boolean; // boolean

  let dialog: HTMLDialogElement; // HTMLDialogElement

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  class="rounded-lg bg-background text-foreground backdrop:bg-black backdrop:opacity-50"
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation>
    <div
      class="w-full text-2xl font-serif font-bold bg-background text-foreground"
    >
      <div class="p-4">
        <slot name="header" />
      </div>
      <hr class="border-comment" />
      <slot />
    </div>

    <!-- svelte-ignore a11y-autofocus -->
    <!-- <button autofocus on:click={() => dialog.close()}>close modal</button> -->
  </div>
</dialog>
