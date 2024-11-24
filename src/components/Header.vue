<script setup>
import { RouterLink } from 'vue-router'
import Container from '@/layout/Container.vue'
</script>

<template>
  <header>
    <Container>
      <div class="w-full flex justify-between items-center">
        <div class="flex items-center">
          <!--logo section-->
          <RouterLink to="/">
            <img src="../assets/images/Logo.png" alt="logo for dectop" class="hidden sm:flex" />
            <img
              src="../assets/images/MobileLogo.png"
              alt="logo for mobile"
              class="flex sm:hidden"
            />
          </RouterLink>
        </div>
        <div class="flex items-center">
          <!--menu section-->
          <div class="flex sm:hidden">
            <!--mobile menu-->
            <button>
              <img src="../assets/icons/List.png" alt="drop down menu" />
            </button>
          </div>
          <div class="hidden sm:flex">
            <!--dectop menu-->
            <nav class="flex flex-wrap gap-10 text-[15xp]">
              <RouterLink to="">Home</RouterLink>
              <RouterLink to="">Services</RouterLink>
              <RouterLink to="">Fine a Doctor</RouterLink>
              <RouterLink to="">Abut Us</RouterLink>
            </nav>
          </div>
        </div>
        <div class="hidden sm:flex items-center">
          <button
            class="flex justify-center items-center w-[120px] h-[35px] bg-[#2F80ED] text-white text-[1rem] rounded-[20px]"
          >
            Rigester
          </button>
        </div>
      </div>
    </Container>
  </header>
</template>
