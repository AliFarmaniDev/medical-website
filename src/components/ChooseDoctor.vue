<script setup>
import { RouterLink } from 'vue-router';
import { useDoctorStore } from '@/stores/mainStore';
// import layout components
import Container from '@/layout/Container.vue';

const doctorStore = useDoctorStore();
doctorStore.getDoctors();
</script>

<template>
  <Container>
    <div class="flex flex-col">
      <div class="flex sm:items-center sm:justify-between">
        <!-- title of section -->
        <h2 class="text-wrap capitalize text-[30px] my-4 font-bold text-black">
          choose doctor's <span class="text-[#2F80ED] italic">expertise</span>
        </h2>
        <RouterLink to="/" class="hidden sm:flex capitalize text-[#2F80ED]"> see all</RouterLink>
      </div>
      <div class="flex flex-col sm:flex-row sm:gap-2 gap-5">
        <!-- body of section -->
        <div v-for="doctor in doctorStore.sorted" :key="doctor.id" class="flex flex-col justify-between w-full sm:w-[324px] h-[318px] gap-4 bg-[#F7F7F7] px-3 py-10 rounded-[12px]">
          <img :src="doctor.icon" :alt="doctor.title"  class="w-10 h-10"/>
          <h2 class=" text-[#111111] text-[20px] font-bold">{{ doctor.title }}</h2>
          <p class="text-[#808080] font-medium text-wrap">{{ doctor.body }}</p>
          <button class="flex items-center gap-3 capitalize text-[#2F80ED]">
            book consultation
            <img src="../assets/icons/Vector.png" alt="vector shape">
          </button>
        </div>
        <button class="my-3 w-full h-[35px] rounded-[20px] flex sm:hidden justify-center items-center gap-3 text-[15px] text-[#2F80ED] capitalize border border-[#2F80ED]"> see more <img src="../assets/icons/Vector.png" alt="vector shape"></button>
      </div>
    </div>
  </Container>
</template>
