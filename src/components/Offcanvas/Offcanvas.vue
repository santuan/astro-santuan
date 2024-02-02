<script setup lang="ts">
import { ref } from "vue";
const show = ref(true);
</script>

<template>
  <div>
    <button
      class="offcanvasBtn fixed text-lg justify-center items-center opacity-80 rounded-md overflow-hidden hover:opacity-100 p-0.5 bg-gray-700/80 hover:bg-gray-800/90 duration-1000 font-bold text-gray-100 right-3 z-[999] flex top-3"
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
        <svg  v-else xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="m12 12.708l-5.246 5.246q-.14.14-.344.15q-.204.01-.364-.15t-.16-.354q0-.194.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344q-.01-.204.15-.364t.354-.16q.194 0 .354.16L12 11.292l5.246-5.246q.14-.14.344-.15q.204-.01.364.15t.16.354q0 .194-.16.354L12.708 12l5.246 5.246q.14.14.15.344q.01.204-.15.364t-.354.16q-.194 0-.354-.16z"/></svg>
      </Transition>
    </button>
    <Transition>
      <div
        v-if="!show"
        class="fixed inset-0 flex-col gap-12 bg-white/80 dark:bg-gray-900/90 z-[101] flex justify-center items-center font-mono backdrop-blur-lg"
      >
        <a @click="show = !show" rel="prefetch" href="/lab/renders" class="link link--dia">
          <span>Renders</span>
        </a>
        <a @click="show = !show" rel="prefetch" href="/lab/container-error-exitoso" class="link link--dia">
          <span>container.error.exitoso</span>
        </a>
      </div>
    </Transition>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
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
    content: '';
    /* show by default */
}

.link--dia {
    @apply text-lg md:text-3xl;
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
    content: '';
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
