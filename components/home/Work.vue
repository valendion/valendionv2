<template>
  <div class="mb-40" id="work">
    <div class="flex justify-between items-center flex-col">
      <div
        class="flex justify-start items-center mb-5 w-full"
        v-aos.once="['animate__fadeInDown']"
        data-aos-delay="0.5s"
        data-aos-duration="1s"
      >
        <hr class="w-10 h-px bg-white" />
        <p class="text-primary text-2xl">C. &nbsp;</p>
        <span class="text-white text-3xl">Work </span>
      </div>
      <GridWork />
    </div>
  </div>
</template>

<script setup lang="ts">
import GridWork from "../ItemWork/GridWork.vue";
</script>

<style scoped></style>
