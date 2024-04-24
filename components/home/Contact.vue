<template>
  <div class="mb-40">
    <div class="flex justify-between items-center flex-col">
      <div class="flex justify-start items-center mb-5 w-full">
        <hr class="w-10 h-px bg-white" />
        <p class="text-primary text-2xl">D. &nbsp;</p>
        <span class="text-white text-3xl">Contact </span>
      </div>

      <p class="text-2xl text-white font-medium">You can contact me via</p>
    </div>

    <!-- <div class="flex justify-center items-center"> -->
    <div class="grid md:grid-cols-4 gap-4 mt-10 grid-cols-1">
      <div v-for="item in itemContacts">
        <NuxtLink :to="item.socialMedia" target="_blank">
          <NuxtImg
            :src="item.icons"
            class="icon_contact w-full mx-auto item_work cursor-pointer"
          />
        </NuxtLink>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import type { ContactItem } from "~/model/ContactItem";

const icons: string[] = [
  "/img/ic_github.svg",
  "/img/ic_linkedin.svg",
  "/img/ic_tiktok.svg",
  "/img/ic_ig.svg",
];

const socialMedia: string[] = [
  "https://github.com/valendion",
  "https://www.linkedin.com/in/valendion-pradana-pasalu-194a241aa/",
  "https://www.tiktok.com/@valendionpradana",
  "https://www.instagram.com/dionaja027/",
];

let itemContacts: ContactItem[] = [];

for (let index = 0; index < icons.length; index++) {
  itemContacts.push({ icons: icons[index], socialMedia: socialMedia[index] });
}

console.log("Item Contact", itemContacts[0]);
</script>

<style scoped></style>
