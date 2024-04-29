<template>
  <ul class="hidden md:flex items-center pr-10 text-sm cursor-pointer">
    <li>
      <NuxtLink to="#about_me"
        ><p class="menu_navbar">
          <span class="text-primary">A. </span>About Me
        </p></NuxtLink
      >
    </li>
    <li>
      <NuxtLink to="#experience">
        <p class="menu_navbar">
          <span class="text-primary">B. </span>Experience
        </p>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="#work">
        <p class="menu_navbar"><span class="text-primary">C. </span>Work</p>
      </NuxtLink>
    </li>

    <li>
      <NuxtLink to="#contact">
        <p class="menu_navbar"><span class="text-primary">D. </span>Contact</p>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts"></script>

<style scoped></style>
