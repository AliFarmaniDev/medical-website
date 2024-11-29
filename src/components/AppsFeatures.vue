<script setup>
import Container from '@/layout/Container.vue'
</script>

<template>
  <Container>
    <div class="flex flex-col w-full my-10 sm:my-16">
      <div class="flex items-center justify-start sm:justify-center">
        <!--titel of section-->
        <h2 class="text-black capitalize font-bold text-[32px] text-wrap sm:text-[35px]">
          explor oue app`s <span class="text-[#2F80ED] italic">features</span>
        </h2>
      </div>
      <div class="flex flex-col sm:flex-row w-full sm:gap-3">
        <!--body section-->
        <div class="flex flex-wrap w-full gap-5 sm:w-[500px]">
          <div class="flex gap-3 mt-3 w-full bg-[#F5F5F5] rounded-[12px] px-3 order-1">
            <!--box1-->
            <div class="flex-col gap-3 py-3">
              <img src="../assets/icons/Icon Badge.png" alt="" class="w-[40px] h-[40px]" />
              <h2 class="text-[18px] text-black capitalize font-bold">convenint online booking</h2>
              <p class="text-wrap text-[#808080]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quia aspernatur
                officiis non eligendi sapiente.
              </p>
            </div>
            <div class="flex flex-col justify-end items-center p-0">
              <!--image box1-->
              <img src="../assets/images/Mobile.png" alt="mobile" class="w-[456px] h-[140px]" />
            </div>
          </div>
          <div class="flex w-full flex-col gap-3 p-3 rounded-[12px] bg-[#F5F5F5] order-2">
            <!--box2-->
            <img src="../assets/icons/Icon Badge2.png" alt="icons2" class="w-[40px] h-[40px]" />
            <h2 class="text-black text-[18px] font-bold">records managments</h2>
            <p class="text-wrap text-[#808080]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ea aliquid enim
              voluptat
            </p>
          </div>
          <div class="w-full flex sm:flex-col rounded-[12px] bg-[#F5F5F5] mt-5 order-3 sm:hidden">
            <!--box3-->
            <div class="flex flex-col gap-3 p-3">
              <img src="../assets/icons/Icon Badge3.png" alt="icon3" class="w-[40px] h-[40px]" />
              <h2 class="text-black text-[18px] font-bold capitalize">secure virtual metting</h2>
              <p class="text-wrap text-[#808080]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam at consequuntur nam
                veritatis fuga! Quisquam, voluptatum. Esse officiis aliquid quas.
              </p>
            </div>
            <div class="flex flex-col justify-end items-center">
              <img
                src="../assets/images/iPhone 13 Pro (3) 1.png"
                alt="iphone 13 pro"
                class="w-[536px] h-[168px]"
              />
            </div>
          </div>
          <div class="w-full order-4 flex flex-col gap-3 p-3 rounded-[12px] bg-[#F5F5F5]">
            <!--box4-->
            <img src="../assets/icons/Icon Badge4.png" alt="icons" class="w-[40px] h-[40px]" />
            <h2 class="text-black text-[18px] font-bold capitalize">instant confrimation</h2>
            <p class="text-wrap text-[#808080]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio consequatur enim optio
              minus iure praesentium.
            </p>
          </div>
        </div>
        <div class="w-full hidden sm:flex sm:flex-col rounded-[12px] bg-[#F5F5F5] mt-5 order-3 sm:w-[500px] sm:justify-between">
          <!--box3-->
          <div class="flex flex-col gap-3 p-3">
            <img src="../assets/icons/Icon Badge3.png" alt="icon3" class="w-[40px] h-[40px]" />
            <h2 class="text-black text-[18px] font-bold capitalize">secure virtual metting</h2>
            <p class="text-wrap text-[#808080]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam at consequuntur nam
              veritatis fuga! Quisquam, voluptatum. Esse officiis aliquid quas.
            </p>
          </div>
          <div class="flex flex-col justify-end items-center sm:justify-center mt-5">
            <img
              src="../assets/images/iPhone 13 Pro (3) 1.png"
              alt="iphone 13 pro"
              class="w-[536px] h-[168px] sm:w-[320px] sm:h-[320px] sm:hidden"
            />
            <img src="../assets/images/iPhone 13 Pro (3) 1 Desctop.png " alt="" class="hidden sm:flex">
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
