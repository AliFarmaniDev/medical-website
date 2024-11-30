<script setup>
//import layout
import Container from '@/layout/Container.vue'
//importing components
import MainBaner from '@/components/MainBaner.vue'
import ChooseDoctor from '@/components/ChooseDoctor.vue'
import AppsFeatures from '@/components/AppsFeatures.vue'
import Testimonial from '@/components/Testimonial.vue'
import ShowPost from '@/components/ShowPost.vue'
</script>

<template>
  <div>
    <MainBaner />
  </div>
  <div class="my-5 sm:6">
    <ChooseDoctor />
  </div>
  <div>
    <Container>
      <div class="flex flex-col sm:flex-row sm:gap-1 w-full items-center mt-16">
        <div class="w-full flex flex-col gap-4">
          <!--image box-->
          <div
            class="flex gap-2 items-center sm:hidden w-full h-[30px] rounded-[20px] bg-[#2f81ed48] px-3"
          >
            <img src="../assets/icons/Star.png" alt="star shape" class="w-5 h-5" />
            <p class="text-[#2F80ED] text-[10px] font-bold">
              Rated #1 for appointment with many professional doctors
            </p>
          </div>
          <img
            src="../assets/images/DoctorsMobile.png"
            alt="doctors image"
            class="flex sm:hidden"
          />
          <!--image for desctop-->
          <img
            src="../assets/images/DoctorsDesctop.png"
            alt="doctors image"
            class="hidden sm:flex sm:w-[521px] sm:h-[321px]"
          />
        </div>
        <div class="flex flex-col justify-between w-full mt-5 gap-4 sm:w-[600px] sm:h-[321px]">
          <div
            class="w-full hidden sm:flex items-center bg-[#2f81ed48] h-[34px] rounded-[20px] px-3 gap-2"
          >
            <img src="../assets/icons/Star.png" alt="star shape" />
            <p class="text-[#2F80ED] text-[12px] font-medium">
              Rated #1 for appointment with many professional doctors
            </p>
          </div>
          <p class="text-wrap text-black text-[18px] sm:text-[22px] font-medium">
            We`are revolutionizing seameless access to trusted professionals, prioritizing your
            journey to better health
          </p>
          <div class="w-full flex items-center gap-5 justify-center">
            <div class="flex flex-col">
              <span class="text-[#2F80ED] text-[40px] font-medium text-center">40+</span>
              <span class="text-[#808080] text-[14px] font-medium">Dedicated Doctors</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[#2F80ED] text-[40px] font-medium text-center">10K+</span>
              <span class="text-[#808080] text-[14px] font-medium"
                >Houers of Patent Consolutions</span
              >
            </div>
          </div>
        </div>
        <!--end section-->
      </div>
    </Container>
  </div>
  <div>
    <!--apps feature-->
    <AppsFeatures />
  </div>
  <div>
    <!--testimonial section-->
    <Testimonial />
  </div>
  <div>
    <!--blog section-->
    <ShowPost />
  </div>
</template>
