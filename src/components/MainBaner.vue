<script setup>
//import components
import Container from '@/layout/Container.vue'
import ButtonBox from './ButtonBox.vue'
</script>

<template>
  <Container>
    <div class="flex flex-col items-center gap-2 sm:gap-0 sm:flex-row w-full sm:mt-10">
      <!--main-->
      <div class="flex flex-col gap-2 sm:gap-3">
        <!--text box-->
        <div
          class="flex flex-wrap items-center gap-2 text-[12px] w-full h-[30px] rounded-[20px] bg-[#2f81ed41] px-3 sm:w-[393px] sm:text-[13px]"
        >
          <img src="../assets/icons/Star.png" alt="star shape" class="w-3 h-3" />
          <p class="text-[#2F80ED]">Rated #1 choice for healthcare appointment by users</p>
        </div>
        <h2 class="text-wrap text-black text-[28px] font-bold sm:text-[43px] sm:font-semibold">
          Connecting You <span class="italic text-[#2F80ED]">to</span> Better Health
        </h2>
        <p class="text-wrap text-[#808080] text-[13px] sm:text-[14px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur asperiores dolor
          architecto aliquid, amet cupiditate praesentium sint dignissimos delectus iste.
        </p>
        <div class="hidden sm:flex">
          <!--button box-->
          <ButtonBox />
        </div>
      </div>
      <div class="flex flex-col my-3 gap-2">
        <div class="flex item-center">
          <img
            src="../assets/images/HeroImageMobile.png"
            alt="mobile hero baner image"
            class="flex sm:hidden"
          />
          <!--desctop image-->
          <img
            src="../assets/images/HeroImageDesctop.png"
            alt="desxtop hero baner image"
            class="hidden sm:flex sm:w-[800px]"
          />
        </div>
        <div class="flex sm:hidden">
          <ButtonBox />
        </div>
      </div>
    </div>
  </Container>
</template>
