<template>
  <main class="main_wrapper">
    <div class="content_section">
      <p class="text-primary text-base mb-8 ml-1">Hello, my name is</p>
      <p class="text-white text-5xl mb-8">
        Valendion<br />
        Pradana Pasalu.
      </p>
      <p class="text-whiteYoung text-3xl mb-8">
        I build websites from the appearance side.
      </p>

      <div class="btn_contact">
        <span class="primary-style-text">Contact Me</span>
      </div>
    </div>

    <div class="">
      <div class="flex justify-between items-center">
        <div class="flex items-start flex-col mr-10 w-9/12">
          <div class="flex justify-center items-center mb-5">
            <hr class="w-10 h-px bg-white" />
            <p class="text-primary text-2xl">A. &nbsp;</p>
            <span class="text-white text-3xl">About Me</span>
          </div>

          <p class="text-whiteYoung mb-2">You can call me, Dion</p>

          <p class="text-whiteYoung mb-2">
            I graduated from UNDIPA Makassar campus majoring in informatics
            engineering. Previously, I usually made mobile-based applications
            whether it was a thesis program or a small assignment.
          </p>

          <p class="text-whiteYoung mb-2">
            But now I focus on creating web-based applications, more precisely
            Front End
          </p>

          <p class="text-whiteYoung">
            Here are some of the technologies I have used
          </p>
          <!-- <img src="/public/icon/ic_check.png" alt="" /> -->
          <ul class="text-whiteYoung list-image-check2 list-inside">
            <li>Html</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Reactjs</li>
            <li>Nextjs</li>
            <li>Vuejs</li>
            <li>Nuxtjs</li>
          </ul>
        </div>

        <div class="relative">
          <img
            src="/img/profile_pic.png"
            alt="Profile Picture"
            class="w-[280px] h-[350px] rounded-full object-cover mb-20"
          />
          <img
            src="/img/blob.svg"
            class="absolute -bottom-0 left-1/2 transform -translate-x-1/2 -z-10 w-[350px] h-[350px] scale-125"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
