<script setup lang="ts">
import { useMagicKeys } from "@vueuse/core";
import { ref, watch } from "vue";
const show = ref(true);

const { M } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === "j" && (e.metaKey || e.ctrlKey)) e.preventDefault();
  },
});

watch([M], (v) => {
  if (v[0]) handleOpenChange();
});

function handleOpenChange() {
  show.value = !show.value;
}
</script>

<template>
  <div
    class="relative flex flex-col items-center justify-center min-h-dvh overflow-hidden text-center dark:bg-gray-900 shadow-sm bg-pattern"
  >
    <div
      class="relative z-50 w-full px-8 mx-auto mt-24 mb-2 text-left md:mt-8 max-w-7xl"
    >
      <div class="w-full font-serif text-3xl text-left md:text-6xl">
        <Transition>
          <div
            v-if="show"
            class="flex-col w-full mt-2 flex justify-start items-start"
          >
            <h1
              class="font-bold bg-white dark:bg-gray-900 p-1 inline-flex cursor-default"
            >
              Nada que decir,
            </h1>
            <h2
              class="font-bold bg-white dark:bg-gray-900 p-1 inline-flex cursor-default group"
            >
              solo
              <button
                @click="show = !show"
                class="inline-block group-hover:opacity-300 ml-3 text-orange-300 duration-1000"
              >
                <span class="iniciar iniciar--dia">imágenes.</span>
              </button>
            </h2>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <Transition>
    <div
      v-if="show"
      class="scale-75 md:scale-50 dark:hover:opacity-50 origin-center duration-1000 object-cover w-full object-right z-0 md:object-center fixed inset-0"
    >
      <video
        autoplay
        loop
        muted
        playsinline
        class="object-cover h-[700px] w-full md:h-[900px] absolute top-0 left-0 object-right z-0 md:object-center"
        poster="https://res.cloudinary.com/srcouto/video/upload/c_scale,q_auto:eco,w_763/v1628508273/encoder/herohdsantuan0001-0250_wpgean.jpg"
      >
        <source
          src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1628057438/encoder/herohdsantuan0001-0250_wpgean.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1628057438/encoder/herohdsantuan0001-0250_wpgean.webm"
          type="video/webm"
        />
        <source
          src="https://res.cloudinary.com/srcouto/video/upload/q_auto:low/v1628128970/encoder/herohdsantuan0001-0250_wpgean.ogv"
          type="video/ogg"
        />
      </video>
    </div>

    <div
      v-else
      class="origin-center duration-1000 object-cover flex justify-center items-center w-full object-right md:object-center fixed bottom-0 top-0 left-0 right-0 z-[99999]"
    >
      <nav
        class="md:flex-row flex-col h-dvh flex justify-between mx-auto items-center w-full"
      >
        <div
          class="border-b-2 h-1/3 md:border-b-0 overflow-hidden relative group grou md:border-r dark:border-white/10 w-full flex justify-center items-center md:h-screen"
        >
          <a rel="prefetch" href="/lab/renders" class="link link--dia mx-auto z-10 relative py-6">
            <span>Renders</span>
          </a>
          <img
            class="opacity-0 absolute w-full object-cover md:h-screen inset-0 duration-1000 z-0 group-hover:opacity-30 group-focus-within:opacity-30"
            src="https://res.cloudinary.com/srcouto/image/upload/c_scale,w_700/q_60/v1630556712/stn-renders/567_vpomfk.jpg"
          />
        </div>
        <div
          class="border-b-2 h-1/3 md:border-b-0 overflow-hidden relative group md:border-r dark:border-white/10 w-full flex justify-center items-center md:h-screen "
        >
          <a
            rel="prefetch"
            href="/lab/containers"
            class="link link--dia mx-auto z-10 relative py-6"
          >
            <span>Containers</span>
          </a>
          <img
            class="opacity-0 absolute h-screen object-cover w-full inset-0 duration-1000 z-0 group-hover:opacity-30 group-focus-within:opacity-30"
            src="https://res.cloudinary.com/srcouto/image/upload/c_scale,w_700/q_60/v1706811906/container-error-exitoso/348258289_1044107733661321_1560738546194492452_n_nkea4p.jpg"
          />
        </div>
        <div
          class="w-full z-20 flex h-1/3 justify-center overflow-hidden relative group items-center md:h-screen "
        >
          <a rel="prefetch" href="/lab/palabras" class="link link--dia mx-auto z-10 relative py-6">
            <span>Palabras</span>
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" class="opacity-0 absolute h-screen inset-0 duration-1000 z-0 group-focus-within:opacity-30 group-hover:opacity-30" id="a" viewBox="0 0 746.52 350.52"><path d="M0 1.32h35.28c12.08 0 21.08 1.74 27 5.22 5.92 3.48 8.88 9.7 8.88 18.66 0 9.92-3.6 16.76-10.8 20.52-6.72 3.44-16.12 5.16-28.2 5.16h-.96v32.16h15v2.28H0v-2.28h7.8V3.6H0V1.32ZM31.2 3.6v45h2.52c4.8 0 8.12-1.64 9.96-4.92 1.84-3.28 2.76-8.6 2.76-15.96v-5.76c0-6.8-.86-11.56-2.58-14.28C42.14 4.96 39 3.6 34.44 3.6H31.2ZM132.12 83.04l-8.76-25.92H99.6l-9.24 25.92h9v2.28H81v-2.28h5.64L117.24.6h9.84l30.24 82.44h5.52v2.28H123.6v-2.28h8.52Zm-20.16-60-11.28 31.44h21.72l-10.44-31.44ZM185.28 1.32h43.2v2.64h-12.72v78.72h4.32c6.8 0 12.22-2.08 16.26-6.24 4.04-4.16 8.14-10.56 12.3-19.2h2.52l-2.28 28.08h-63.6v-2.64h7.08V3.96h-7.08V1.32ZM325.32 83.04l-8.76-25.92H292.8l-9.24 25.92h9v2.28H274.2v-2.28h5.64L310.44.6h9.84l30.24 82.44h5.52v2.28H316.8v-2.28h8.52Zm-20.16-60-11.28 31.44h21.72l-10.44-31.44ZM378.48 1.32h35.88c11.12 0 19.46 1.5 25.02 4.5 5.56 3 8.34 8.06 8.34 15.18 0 10.96-6.6 17.52-19.8 19.68v.24c16 2 24 8.96 24 20.88 0 8.72-3.28 14.82-9.84 18.3-6.56 3.48-16 5.22-28.32 5.22h-35.28v-2.28h7.8V3.6h-7.8V1.32Zm31.2 2.28v36.96h3.12c4.16 0 7.06-1.26 8.7-3.78 1.64-2.52 2.46-6.38 2.46-11.58v-5.64c0-5.92-.72-10.06-2.16-12.42-1.44-2.36-4.2-3.54-8.28-3.54h-3.84Zm0 39.24v40.2h5.64c4.4 0 7.48-1.52 9.24-4.56 1.76-3.04 2.64-7.52 2.64-13.44v-6.36c0-5.28-1.08-9.24-3.24-11.88s-6-3.96-11.52-3.96h-2.76ZM513.6 42.84h-6.36v40.2h7.8v2.28h-39v-2.28h7.8V3.6h-7.8V1.32h36.24c10.4 0 17.78.54 22.14 1.62 4.36 1.08 7.42 2.38 9.18 3.9 3.84 3.12 5.76 8.08 5.76 14.88s-1.68 11.66-5.04 14.58c-3.36 2.92-8.48 4.66-15.36 5.22v.36c6.48.88 11 2.8 13.56 5.76 2.56 2.96 3.84 7.92 3.84 14.88v6.36c0 4.16.22 6.96.66 8.4.44 1.44 1.38 2.16 2.82 2.16s2.58-.66 3.42-1.98c.84-1.32 1.62-4.1 2.34-8.34l2.04.24c-.88 6.8-2.42 11.36-4.62 13.68-2.2 2.32-6.58 3.48-13.14 3.48s-11.22-1.54-13.98-4.62-4.14-8.86-4.14-17.34V55.8c0-4.48-.58-7.76-1.74-9.84-1.16-2.08-3.3-3.12-6.42-3.12ZM507.24 3.6v36.96h3.84c4.56 0 7.94-1.4 10.14-4.2 2.2-2.8 3.3-7.36 3.3-13.68V19.2c0-6.32-1.06-10.5-3.18-12.54-2.12-2.04-5.5-3.06-10.14-3.06h-3.96ZM630 83.04l-8.76-25.92h-23.76l-9.24 25.92h9v2.28h-18.36v-2.28h5.64L615.12.6h9.84l30.24 82.44h5.52v2.28h-39.24v-2.28H630Zm-20.16-60-11.28 31.44h21.72l-10.44-31.44ZM718.44 84c4 0 7.54-1.08 10.62-3.24 3.08-2.16 4.62-5.42 4.62-9.78s-1.66-7.7-4.98-10.02c-3.32-2.32-8.04-4.34-14.16-6.06-6.12-1.72-10.56-3.22-13.32-4.5-2.76-1.28-5.38-2.96-7.86-5.04-4.96-4.16-7.44-10.6-7.44-19.32 0-7.12 2.54-13.24 7.62-18.36C698.62 2.56 705.56 0 714.36 0c4.24 0 8.66.62 13.26 1.86 4.6 1.24 7.46 1.86 8.58 1.86s2.12-.8 3-2.4h1.32l.84 24.24h-1.92c-3.84-6.96-7.86-12.54-12.06-16.74-4.2-4.2-8.76-6.3-13.68-6.3s-8.74 1.14-11.46 3.42c-2.72 2.28-4.08 5.32-4.08 9.12s1.62 6.72 4.86 8.76 7.22 3.7 11.94 4.98c4.72 1.28 7.82 2.16 9.3 2.64 1.48.48 3.32 1.14 5.52 1.98 2.2.84 4 1.72 5.4 2.64 1.4.92 2.88 2.08 4.44 3.48 1.56 1.4 2.78 2.94 3.66 4.62 2.16 3.84 3.24 8.4 3.24 13.68 0 8.64-2.7 15.58-8.1 20.82-5.4 5.24-12.5 7.86-21.3 7.86-4.56 0-9.78-.6-15.66-1.8-5.88-1.2-9.14-1.8-9.78-1.8-1.12 0-2.2 1.2-3.24 3.6h-1.68l-1.2-28.56h2.04c3.52 6.96 8.02 13.04 13.5 18.24 5.48 5.2 11.26 7.8 17.34 7.8ZM0 131.32h35.28c12.08 0 21.08 1.74 27 5.22 5.92 3.48 8.88 9.7 8.88 18.66 0 9.92-3.6 16.76-10.8 20.52-6.72 3.44-16.12 5.16-28.2 5.16h-.96v32.16h15v2.28H0v-2.28h7.8V133.6H0v-2.28Zm31.2 2.28v45h2.52c4.8 0 8.12-1.64 9.96-4.92 1.84-3.28 2.76-8.6 2.76-15.96v-5.76c0-6.8-.86-11.56-2.58-14.28-1.72-2.72-4.86-4.08-9.42-4.08H31.2Z"/><path d="M120.24 213.04v2.28H81v-2.28h5.52l30.24-82.44h9.84l30.6 82.44h5.64v2.28h-18.36v-2.28h9l-9.24-25.92h-23.76l-8.76 25.92h8.52Zm1.2-28.56h21.72l-11.28-31.44-10.44 31.44Z" class="b"/><path d="M185.28 131.32h43.2v2.64h-12.72v78.72h4.32c6.8 0 12.22-2.08 16.26-6.24 4.04-4.16 8.14-10.56 12.3-19.2h2.52l-2.28 28.08h-63.6v-2.64h7.08v-78.72h-7.08v-2.64Z"/><path d="M313.44 213.04v2.28H274.2v-2.28h5.52l30.24-82.44h9.84l30.6 82.44h5.64v2.28h-18.36v-2.28h9l-9.24-25.92h-23.76l-8.76 25.92h8.52Zm1.2-28.56h21.72l-11.28-31.44-10.44 31.44ZM378.48 213.04h7.8V133.6h-7.8v-2.28h35.28c12.32 0 21.76 1.74 28.32 5.22 6.56 3.48 9.84 9.58 9.84 18.3 0 11.92-8 18.88-24 20.88v.24c13.2 2.16 19.8 8.72 19.8 19.68 0 7.12-2.78 12.18-8.34 15.18-5.56 3-13.9 4.5-25.02 4.5h-35.88v-2.28Zm35.04 0c4.08 0 6.84-1.18 8.28-3.54 1.44-2.36 2.16-6.5 2.16-12.42v-5.64c0-5.2-.82-9.06-2.46-11.58-1.64-2.52-4.54-3.78-8.7-3.78h-3.12v36.96h3.84Zm-1.08-39.24c5.52 0 9.36-1.32 11.52-3.96s3.24-6.6 3.24-11.88v-6.36c0-5.92-.88-10.4-2.64-13.44-1.76-3.04-4.84-4.56-9.24-4.56h-5.64v40.2h2.76Z" class="b"/><path d="M513.6 172.84h-6.36v40.2h7.8v2.28h-39v-2.28h7.8V133.6h-7.8v-2.28h36.24c10.4 0 17.78.54 22.14 1.62 4.36 1.08 7.42 2.38 9.18 3.9 3.84 3.12 5.76 8.08 5.76 14.88s-1.68 11.66-5.04 14.58c-3.36 2.92-8.48 4.66-15.36 5.22v.36c6.48.88 11 2.8 13.56 5.76 2.56 2.96 3.84 7.92 3.84 14.88v6.36c0 4.16.22 6.96.66 8.4.44 1.44 1.38 2.16 2.82 2.16s2.58-.66 3.42-1.98c.84-1.32 1.62-4.1 2.34-8.34l2.04.24c-.88 6.8-2.42 11.36-4.62 13.68-2.2 2.32-6.58 3.48-13.14 3.48s-11.22-1.54-13.98-4.62-4.14-8.86-4.14-17.34v-8.76c0-4.48-.58-7.76-1.74-9.84-1.16-2.08-3.3-3.12-6.42-3.12Zm-6.36-39.24v36.96h3.84c4.56 0 7.94-1.4 10.14-4.2 2.2-2.8 3.3-7.36 3.3-13.68v-3.48c0-6.32-1.06-10.5-3.18-12.54-2.12-2.04-5.5-3.06-10.14-3.06h-3.96Z"/><path d="M618.11 213.04v2.28h-39.24v-2.28h5.52l30.24-82.44h9.84l30.6 82.44h5.64v2.28h-18.36v-2.28h9l-9.24-25.92h-23.76l-8.76 25.92h8.52Zm1.2-28.56h21.72l-11.28-31.44-10.44 31.44ZM713.64 132.52c-4 0-7.54 1.08-10.62 3.24-3.08 2.16-4.62 5.42-4.62 9.78s1.66 7.7 4.98 10.02c3.32 2.32 8.04 4.34 14.16 6.06 6.12 1.72 10.56 3.22 13.32 4.5 2.76 1.28 5.38 2.96 7.86 5.04 4.96 4.16 7.44 10.6 7.44 19.32 0 7.12-2.54 13.24-7.62 18.36-5.08 5.12-12.02 7.68-20.82 7.68-4.24 0-8.66-.62-13.26-1.86-4.6-1.24-7.46-1.86-8.58-1.86s-2.12.8-3 2.4h-1.32l-.84-24.24h1.92c3.84 6.96 7.86 12.54 12.06 16.74 4.2 4.2 8.76 6.3 13.68 6.3s8.74-1.14 11.46-3.42c2.72-2.28 4.08-5.32 4.08-9.12s-1.62-6.72-4.86-8.76-7.22-3.7-11.94-4.98c-4.72-1.28-7.82-2.16-9.3-2.64-1.48-.48-3.32-1.14-5.52-1.98-2.2-.84-4-1.72-5.4-2.64-1.4-.92-2.88-2.08-4.44-3.48-1.56-1.4-2.78-2.94-3.66-4.62-2.16-3.84-3.24-8.4-3.24-13.68 0-8.64 2.7-15.58 8.1-20.82 5.4-5.24 12.5-7.86 21.3-7.86 4.56 0 9.78.6 15.66 1.8 5.88 1.2 9.14 1.8 9.78 1.8 1.12 0 2.2-1.2 3.24-3.6h1.68l1.2 28.56h-2.04c-3.52-6.96-8.02-13.04-13.5-18.24-5.48-5.2-11.26-7.8-17.34-7.8Z" class="b"/><path d="M0 265.32h35.28c12.08 0 21.08 1.74 27 5.22 5.92 3.48 8.88 9.7 8.88 18.66 0 9.92-3.6 16.76-10.8 20.52-6.72 3.44-16.12 5.16-28.2 5.16h-.96v32.16h15v2.28H0v-2.28h7.8V267.6H0v-2.28Zm31.2 2.28v45h2.52c4.8 0 8.12-1.64 9.96-4.92 1.84-3.28 2.76-8.6 2.76-15.96v-5.76c0-6.8-.86-11.56-2.58-14.28-1.72-2.72-4.86-4.08-9.42-4.08H31.2ZM120.24 347.04v2.28H81v-2.28h5.52l30.24-82.44h9.84l30.6 82.44h5.64v2.28h-18.36v-2.28h9l-9.24-25.92h-23.76l-8.76 25.92h8.52Zm1.2-28.56h21.72l-11.28-31.44-10.44 31.44ZM185.28 265.32h43.2v2.64h-12.72v78.72h4.32c6.8 0 12.22-2.08 16.26-6.24 4.04-4.16 8.14-10.56 12.3-19.2h2.52l-2.28 28.08h-63.6v-2.64h7.08v-78.72h-7.08v-2.64ZM313.44 347.04v2.28H274.2v-2.28h5.52l30.24-82.44h9.84l30.6 82.44h5.64v2.28h-18.36v-2.28h9l-9.24-25.92h-23.76l-8.76 25.92h8.52Zm1.2-28.56h21.72l-11.28-31.44-10.44 31.44ZM378.48 347.04h7.8V267.6h-7.8v-2.28h35.28c12.32 0 21.76 1.74 28.32 5.22 6.56 3.48 9.84 9.58 9.84 18.3 0 11.92-8 18.88-24 20.88v.24c13.2 2.16 19.8 8.72 19.8 19.68 0 7.12-2.78 12.18-8.34 15.18-5.56 3-13.9 4.5-25.02 4.5h-35.88v-2.28Zm35.04 0c4.08 0 6.84-1.18 8.28-3.54 1.44-2.36 2.16-6.5 2.16-12.42v-5.64c0-5.2-.82-9.06-2.46-11.58-1.64-2.52-4.54-3.78-8.7-3.78h-3.12v36.96h3.84Zm-1.08-39.24c5.52 0 9.36-1.32 11.52-3.96s3.24-6.6 3.24-11.88v-6.36c0-5.92-.88-10.4-2.64-13.44-1.76-3.04-4.84-4.56-9.24-4.56h-5.64v40.2h2.76ZM513.6 306.84h-6.36v40.2h7.8v2.28h-39v-2.28h7.8V267.6h-7.8v-2.28h36.24c10.4 0 17.78.54 22.14 1.62 4.36 1.08 7.42 2.38 9.18 3.9 3.84 3.12 5.76 8.08 5.76 14.88s-1.68 11.66-5.04 14.58c-3.36 2.92-8.48 4.66-15.36 5.22v.36c6.48.88 11 2.8 13.56 5.76 2.56 2.96 3.84 7.92 3.84 14.88v6.36c0 4.16.22 6.96.66 8.4.44 1.44 1.38 2.16 2.82 2.16s2.58-.66 3.42-1.98c.84-1.32 1.62-4.1 2.34-8.34l2.04.24c-.88 6.8-2.42 11.36-4.62 13.68-2.2 2.32-6.58 3.48-13.14 3.48s-11.22-1.54-13.98-4.62-4.14-8.86-4.14-17.34v-8.76c0-4.48-.58-7.76-1.74-9.84-1.16-2.08-3.3-3.12-6.42-3.12Zm-6.36-39.24v36.96h3.84c4.56 0 7.94-1.4 10.14-4.2 2.2-2.8 3.3-7.36 3.3-13.68v-3.48c0-6.32-1.06-10.5-3.18-12.54-2.12-2.04-5.5-3.06-10.14-3.06h-3.96ZM618.11 347.04v2.28h-39.24v-2.28h5.52l30.24-82.44h9.84l30.6 82.44h5.64v2.28h-18.36v-2.28h9l-9.24-25.92h-23.76l-8.76 25.92h8.52Zm1.2-28.56h21.72l-11.28-31.44-10.44 31.44ZM713.64 266.52c-4 0-7.54 1.08-10.62 3.24-3.08 2.16-4.62 5.42-4.62 9.78s1.66 7.7 4.98 10.02c3.32 2.32 8.04 4.34 14.16 6.06 6.12 1.72 10.56 3.22 13.32 4.5 2.76 1.28 5.38 2.96 7.86 5.04 4.96 4.16 7.44 10.6 7.44 19.32 0 7.12-2.54 13.24-7.62 18.36-5.08 5.12-12.02 7.68-20.82 7.68-4.24 0-8.66-.62-13.26-1.86-4.6-1.24-7.46-1.86-8.58-1.86s-2.12.8-3 2.4h-1.32l-.84-24.24h1.92c3.84 6.96 7.86 12.54 12.06 16.74 4.2 4.2 8.76 6.3 13.68 6.3s8.74-1.14 11.46-3.42c2.72-2.28 4.08-5.32 4.08-9.12s-1.62-6.72-4.86-8.76-7.22-3.7-11.94-4.98c-4.72-1.28-7.82-2.16-9.3-2.64-1.48-.48-3.32-1.14-5.52-1.98-2.2-.84-4-1.72-5.4-2.64-1.4-.92-2.88-2.08-4.44-3.48-1.56-1.4-2.78-2.94-3.66-4.62-2.16-3.84-3.24-8.4-3.24-13.68 0-8.64 2.7-15.58 8.1-20.82 5.4-5.24 12.5-7.86 21.3-7.86 4.56 0 9.78.6 15.66 1.8 5.88 1.2 9.14 1.8 9.78 1.8 1.12 0 2.2-1.2 3.24-3.6h1.68l1.2 28.56h-2.04c-3.52-6.96-8.02-13.04-13.5-18.24-5.48-5.2-11.26-7.8-17.34-7.8Z"/></svg>
        </div>
      </nav>
    </div>
  </Transition>
</template>

<style>
 #a path {
    @apply fill-black dark:fill-white;
  }

  .b {
    @apply !fill-amber-400;
  }
.iniciar {
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  color: var(--color-text);
}

.iniciar::before,
.iniciar::after {
  position: absolute;
  width: 100%;
  height: 2px;
  background: currentColor;
  top: 100%;
  left: 0;
  pointer-events: none;
}

.iniciar::before {
  content: "";
  /* show by default */
}

.iniciar--dia::before,
.iniciar--dia::after {
  opacity: 0.5;
  transform-origin: 50% 0%;
  transform: translate3d(0, 3px, 0);
  transition-property: transform, opacity;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.8, 1);
}

.iniciar--dia:hover::before,
.iniciar--dia:hover::after {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition-timing-function: cubic-bezier(0.2, 0, 0.3, 1);
}

.iniciar--dia::after {
  content: "";
  top: calc(100% + 10px);
  width: 70%;
  left: 15%;
}

nav div:nth-child(1) {
  animation-delay: 0.5s;
}
nav div:nth-child(2) {
  animation-delay: 0.8s;
}
nav div:nth-child(3) {
  animation-delay: 1.1s;
}

.iniciar--dia::before,
.iniciar--dia:hover::after {
  transition-delay: 0.1s;
}

.iniciar--dia:hover::before {
  transition-delay: 0s;
}

.link--dia {
  @apply text-4xl font-serif md:text-5xl;
}

.link--dia::before,
.link--dia::after {
  opacity: 0;
  transform-origin: 50% 0%;
  transform: translate3d(0, 3px, 0);
  transition-property: transform, opacity;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.8, 1);
}

.link--dia:hover::before,
.link--dia:hover::after {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition-timing-function: cubic-bezier(0.2, 0, 0.3, 1);
}

.link--dia::after {
  content: "";
  top: calc(100% + 10px);
  width: 70%;
  left: 15%;
}

.link--dia::before,
.link--dia:hover::after {
  transition-delay: 0.1s;
}

.link--dia:hover::before {
  transition-delay: 0s;
}
</style>
