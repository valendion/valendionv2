<template>
  <div>
    <!-- Drawer toggle button -->
    <button
      @click="toggleDrawer"
      class="md:hidden inset-y-0 right-0 p-4 text-gray-500 focus:outline-none"
    >
      <svg
        class="h-6 w-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.75 12c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75H4.5a.75.75 0 0 1-.75-.75zM8.75 8.25c0-.414.336-.75.75-.75h8.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75zm-5 7.5c0-.414.336-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75z"
        />
      </svg>
    </button>

    <!-- Drawer -->
    <div
      v-if="isOpen"
      class="fixed inset-y-0 right-0 z-40 w-64 bg-black_work shadow-xl"
    >
      <!-- Drawer content -->
      <div class="p-4">
        <!-- Your drawer content goes here -->
        <ul
          class="flex items-start justify-center pr-10 text-sm cursor-pointer flex-col h-screen"
        >
          <li>
            <p class="menu_drawer">
              <span class="text-primary">A. </span>About Me
            </p>
          </li>
          <li>
            <p class="menu_drawer">
              <span class="text-primary">B. </span>Experience
            </p>
          </li>
          <li>
            <p class="menu_drawer"><span class="text-primary">C. </span>Work</p>
          </li>
          <li>
            <p class="menu_drawer">
              <span class="text-primary">D. </span>Contact
            </p>
          </li>
        </ul>
      </div>
    </div>

    <!-- Overlay (to close the drawer when clicked outside) -->
    <div
      v-if="isOpen"
      @click="toggleDrawer()"
      class="fixed inset-0 bg-gray-900 opacity-25"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let isOpen = ref(false);

const toggleDrawer = () => {
  isOpen.value = !isOpen.value;
};
</script>
