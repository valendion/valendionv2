<template>
  <SplashScreen v-if="loading" />
  <NuxtLayout v-else name="base">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import SplashScreen from "./components/loading/SplashScreen.vue";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

import { onMounted, ref } from "vue";

const loading = ref(true);

useHead({
  title: "Valendion | Porfolio",
  meta: [{ name: "Website Portfolio", content: "Website Portfolio Valendion" }],
});

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>

<style scoped></style>
