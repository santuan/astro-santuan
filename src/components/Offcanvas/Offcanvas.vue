<template>
  <div data-turbo-permanent id="offcanvas">
    <button
      class="fixed inset-0 bg-white/60 dark:bg-gray-900/60 duration-300 backdrop-blur"
      @click="show = !show"
      :class="[show ? '  opacity-0 select-none z-0 ' : ' opacity-100 z-[998] ']"
    />
    <button
      class="fixed text-lg justify-center items-center dark:bg-transparent opacity-80 hover:opacity-100 p-2 dark:text-gray-100 bg-white font-bold text-gray-900 right-2 z-[999] flex top-3"
      @click="show = !show"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 ml-2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
    <div
      class="fixed right-0 text-center shadow-lg font-mono text-2xl space-y-12 top-0 bottom-0 bg-white dark:bg-gray-900 dark:text-white duration-700 w-64 p-3 z-[1000] flex justify-start pt-12 flex-col"
      :class="[show ? '  translate-x-full ' : ' translate-x-0  ']"
    >
      <a @click="show = !show" href="/"> <span>Inicio</span> </a>
      <a @click="show = !show" href="/recursos"> <span>Recursos</span> </a>
      <a @click="show = !show" href="/galeria"> <span>Imágenes</span> </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const show = ref(true);
</script>
