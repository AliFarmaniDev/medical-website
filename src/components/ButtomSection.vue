<script setup>
import Container from '@/layout/Container.vue'
</script>

<template>
  <div class="bg-mobile-bg sm:bg-desctop-bg bg-cover mt-5 sm:mt-7 w-full h-[500px] sm:h-[400px]">
    <Container>
      <div
        class="flex flex-col justify-center items-center w-full h-full sm:w-[350px] sm:justify-center sm:ml-[300px] sm:pt-[10px]"
      >
        <h2 class="text-center text-white capitalize text-wrap text-[40px] font-medium pt-[130px]">
          start your healthl journy here
        </h2>
        <div class="flex flex-col sm:flex-row w-full gap-4 mt-3">
          <button
            class="flex w-full h-[40px] justify-center items-center text-white capitalize bg-[#2F80ED] rounded-[20px] font-bold smp-2"
          >
            book consultations
          </button>
          <button
            class="bg-inherit w-full h-[40px] flex rounded-[20px] justify-center gap-2 items-center capitalize font-bold text-white border border-white"
          >
            learn more <img src="../assets/icons/VectorWhite.png" alt="" />
          </button>
        </div>
      </div>
    </Container>
  </div>
</template>
