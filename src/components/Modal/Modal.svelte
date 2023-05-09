<script>
  import { createEventDispatcher, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  const dispatch = createEventDispatcher();
  const close = () => dispatch("close");

  let modal;

  const handle_keydown = (e) => {
    if (e.key === "Escape") {
      close();
      return;
    }

    if (e.key === "Tab") {
      // trap focus
      const nodes = modal.querySelectorAll("*");
      const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey) index = 0;

      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      e.preventDefault();
    }
  };

  const previously_focused = typeof document !== "undefined" && document.activeElement;

  if (previously_focused) {
    onDestroy(() => {
      previously_focused.focus();
    });
  }
</script>

<svelte:head>
  {#if modal}
    <style>

      .logo, .offcanvasBtn, .moveUp {
        @apply opacity-0  -translate-y-24 ;
      }
    </style>
  {/if}
</svelte:head>

<svelte:window on:keydown={handle_keydown} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="fixed top-0 left-0 w-full h-full bg-gray-900/80 backdrop-blur z-[1000]" on:click={close} transition:fade />
<div class="fixed left-1/2 top-1/2 max-w-4xl w-[calc(100vw-3em)] z-[1001] overflow-auto flex justify-center items-center -translate-x-1/2 -translate-y-1/2" role="dialog" aria-modal="true" bind:this={modal} transition:fade>
  <button type="button" on:click={close} class="w-full">
    <slot />
    <!-- svelte-ignore a11y-autofocus -->
  </button>
</div>