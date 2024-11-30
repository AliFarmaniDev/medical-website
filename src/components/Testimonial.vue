<script setup>
import Container from '@/layout/Container.vue'
import { useTestimonialStore } from '@/stores/testimonial'
//import store
const testimonialStore = useTestimonialStore()
//request to api
testimonialStore.getTestimonial()
</script>

<template>
  <Container>
    <div class="flex flex-col">
      <h2 class="text-wrap text-black capitalize text-[32px] font-bold text-center">
        testimonial from our <span class="italic text-[#2F80ED]">satisfied</span> patients
      </h2>
      <div class="flex flex-col sm:flex-row gap-3">
        <div
          v-for="data in testimonialStore.showTestimonial"
          :key="data.id"
          class="flex flex-col sm:flex-row gap-3 my-5 bg-[#F5F5F5] rounded-[12px]"
        >
          <img :src="data.image" :alt="data.body" class="sm:w-[200px] sm:h-[200px]" />
          <div class="p-3 my-3">
            <p class="text-black text-wrap font-bold sm:text-[12px]">{{ data.body }}</p>
            <h3 class="my-2  text-[#2F80ED] capitalize text-[20px] font-normal sm:text-[18px]">
              {{ data.name }}
            </h3>
            <span class="my-2 sm:my-1 text-[#808080] capitalize text-[18px] font-medium sm:text-[15px]">{{
              data.job
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
