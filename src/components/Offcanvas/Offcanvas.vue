<script
  setup
  lang="ts"
>
import { ref, watch } from 'vue';
import { useMagicKeys } from '@vueuse/core';
const show = ref(true);

const { M } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'j' && (e.metaKey || e.ctrlKey)) e.preventDefault();
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
  <div>
    <button
      class="offcanvasBtn fixed  text-lg justify-center items-center rounded-md hover:opacity-100 p-0.5 bg-gray-800/70 hover:bg-gray-950 duration-1000 font-bold text-gray-100 right-14 z-[1000] flex top-3 tooltip outline-none focus-visible:ring-2 ring-offset-2 focus-visible:ring-gray-800/70"
      @click="show = !show"
      aria-label="Menu"
    >
      <Transition mode="out-in">
        <svg
          v-if="show"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="m12 12.708l-5.246 5.246q-.14.14-.344.15q-.204.01-.364-.15t-.16-.354q0-.194.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344q-.01-.204.15-.364t.354-.16q.194 0 .354.16L12 11.292l5.246-5.246q.14-.14.344-.15q.204-.01.364.15t.16.354q0 .194-.16.354L12.708 12l5.246 5.246q.14.14.15.344q.01.204-.15.364t-.354.16q-.194 0-.354-.16z"
          />
        </svg>
      </Transition>
      <span class="tooltiptext text-xs font-mono flex justify-center items-center gap-3">
        <span v-if="show">Abrir</span>
        <span v-else>Cerrar</span>
        menú
        <span class="bg-white text-gray-900 w-4 rounded h-4 justify-center items-center inline-flex">M</span>
      </span>
    </button>
    <Transition>
      <nav
        v-if="!show"
        @click="show = !show"
        class="fixed inset-0 flex-col gap-4 xl:gap-12 bg-white/80 dark:bg-gray-900/90 z-[999] flex justify-center items-center font-serif font-normal backdrop-blur-lg"
      >
        <a
          rel="prefetch"
          href="/"
          class="link link--dia animate__animated animate__fadeInUp"
        >
          <span>Inicio</span>
        </a>
        <a
          rel="prefetch"
          href="/lab/renders"
          class="link link--dia animate__animated animate__fadeInUp"
        >
          <span>Renders</span>
        </a>
        <a
          rel="prefetch"
          href="/lab/containers"
          class="link link--dia animate__animated animate__fadeInUp"
        >
          <span>Containers</span>
        </a>
        <a
          rel="prefetch"
          href="/lab/palabras"
          class="link link--dia animate__animated animate__fadeInUp"
        >
          <span>Palabras</span>
        </a>
      </nav>
    </Transition>
  </div>
</template>

<style>
nav a:nth-child(1) {
  animation-delay: 0.1s;
}

nav a:nth-child(2) {
  animation-delay: 0.2s;
}

nav a:nth-child(3) {
  animation-delay: 0.3s;
}

nav a:nth-child(4) {
  animation-delay: 0.4s;
}

nav a:nth-child(5) {
  animation-delay: 0.5s;
}

nav a:nth-child(6) {
  animation-delay: 0.6s;
}

nav a:nth-child(7) {
  animation-delay: 0.7s;
}

nav a:nth-child(8) {
  animation-delay: 0.8s;
}

.link {
  cursor: pointer;
  font-size: 18px;
  position: relative;
  white-space: nowrap;
  color: var(--color-text);
}

.link::before,
.link::after {
  position: absolute;
  width: 100%;
  height: 2px;
  background: currentColor;
  top: 100%;
  left: 0;
  pointer-events: none;
}

.link::before {
  content: "";
  /* show by default */
}

.link--dia {
  @apply text-3xl xl:text-6xl;
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

.tooltip {
  @apply inline-block;
  border-bottom: 1px dotted black;
  /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 135px;
  color: #fff;
  text-align: center;
  @apply -translate-x-32 -translate-y-8 duration-300 opacity-0 py-2 rounded-md bg-gray-800/70;
  @apply hidden md:inline-flex;
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 100;
  @apply -translate-x-40
}
</style>
