<script setup>
import FooterContainer from '@/layout/FooterContainer.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="bg-[#1A1A1A] w-full my-0">
        <FooterContainer>
            <div class="flex flex-col gap-3 justify-between sm:flex-row">
                <div class="flex flex-col sm:flex-row order-1 sm:order-2 sm:gap-10">
                    <div class="flex flex-col gap-3 my-4">
                        <h2 class="text-white capitalize text-[20px] font-medium">services</h2>
                        <ul class="flex flex-col gap-4 text-[#CCCCCC] capitalize text-[16px] font-medium">
                            <li>primary care</li>
                            <li>specialist care</li>
                            <li>mental health service</li>
                            <li>telehealth</li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-3 my-4">
                        <h2 class="text-white text-[20px] font-medium">Finde a Doctor</h2>
                        <ul class="flex flex-col gap-4 text-[#CCCCCC] capitalize text-[16px] font-medium">
                            <li>top-rated doctors</li>
                            <li>appointment scheduling</li>
                            <li>patint revieiws</li>
                            <li>doctor profile</li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-3 my-4">
                        <h2 class="text-white capitalize text-[20px] font-medium">about us</h2>
                        <ul class="flex flex-col gap-4 text-[#CCCCCC] capitalize text-[16px] font-medium">
                            <li>news and update</li>
                            <li>careers</li>
                            <li>comminuty invement</li>
                            <li>contact us</li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col gap-3 my-4 order-2 sm:order-1 sm:w-[300px]">
                    <RouterLink to="/">
                        <img src="../assets/images/FooterLogo.png" alt="footer logo">
                    </RouterLink>
                    <p class="text-wrap text-[#CCCCCC] text-[16px] font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consectetur minima excepturi quaerat fugit commodi nam.</p>
                    <div class="flex items-center gap-3">
                        <RouterLink>
                            <img src="../assets/icons/fb.png" alt="facebook icon">
                        </RouterLink>
                        <RouterLink>
                            <img src="../assets/icons/ig.png" alt="instagram icon">
                        </RouterLink>
                        <RouterLink>
                            <img src="../assets/icons/twt.png" alt="twitter icon">
                        </RouterLink>
                    </div>
                </div>
            </div>
        </FooterContainer>
    </footer>
</template>