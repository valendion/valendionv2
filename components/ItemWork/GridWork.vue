<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    v-aos.once="['animate__zoomIn']"
    data-aos-delay="0.5s"
    data-aos-duration="2s"
  >
    <Item
      v-for="(item, index) in works"
      :key="index"
      :link="item.link"
      :description="item.description"
      :technology="item.technology"
      :title="item.title"
    >
    </Item>
  </div>
</template>

<script setup lang="ts">
import Item from "./Item.vue";
import { works } from "~/utils/const";
</script>

<style scoped></style>
