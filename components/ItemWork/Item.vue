<template>
  <div
    class="rounded-md shadow-lg px-4 py-3 text-white bg-black_work item_work"
  >
    <div class="flex flex-col">
      <div class="flex justify-between">
        <img src="/icon/ic_task.svg" alt="Icon Task" class="h-10 w-10" />
        <p v-show="link">Icon</p>
      </div>

      <p class="text-xl mt-10 font-semibold text-balance">{{ title }}</p>
      <p class="text-base mt-3 text-whiteYoung">
        {{ description }}
      </p>
      <ul class="flex gap-x-4 mt-24">
        <li v-for="(value, index) in technology" :key="index">
          {{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const lang: string[] = ["Javascript", "Reactjs", "TailwindCss"];

const { link, title, description, technology } = defineProps({
  link: String,
  title: String,
  description: String,
  technology: Array<String>,
});
</script>

<style scoped></style>
