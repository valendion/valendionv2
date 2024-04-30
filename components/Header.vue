<template>
  <header>
    <nav
      class="bg-black fixed top-0 left-0 shadow w-full text-primary z-10 opacity-90"
    >
      <div
        class="mx-auto max-w-screen-lg px-4 flex justify-between items-center"
      >
        <NuxtLink to="#home">
          <h1 class="pl-8 py-4 text-xl font-bold">.Valendion{}</h1>
        </NuxtLink>
        <Drawer />
        <Menu />
      </div>
    </nav>
  </header>
</template>

<script setup>
import Menu from "./menu/Menu.vue";
import Drawer from "./menu/Drawer.vue";
</script>

<style lang="scss" scoped></style>
