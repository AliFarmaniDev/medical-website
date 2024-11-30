<script setup>
import { usePostStore } from '@/stores/post'
//import components
import Container from '@/layout/Container.vue'

const postStore = usePostStore()
//get data
postStore.getPosts()
</script>

<template>
  <Container>
    <div class="flex flex-col my-[50px] sm:my-7">
      <h2 class="text-wrap text-black capitalize text-[32px] font-bold">
        export <span class="text-[#2F80ED] italic">health</span> advice and update
      </h2>
      <div class="flex flex-col sm:flex-row gap-5 sm:mt-[30px]">
        <div v-for="post in postStore.showPosts" :key="post.id" class="">
          <img :src="post.postImage" :alt="post.postTitle" />
          <div class="flex flex-col">
            <!--text section-->
            <div class="flex gap-1 sm:gap-3 my-2">
              <span class="text-[#2F80ED] font-medium text-[18px] sm:text-[15px]">{{
                post.postCategory
              }}</span>
              <span class="text-[#808080] font-medium text-[18px] sm:text-[15px]">{{
                post.createdAt
              }}</span>
            </div>
            <h2 class="text-black my-3 sm:my-3 font-bold text-[24px] sm:text-[20px]">
              {{ post.postTitle }}
            </h2>
            <p class="text-[#808080] font-medium text-wrap my-2">{{ post.postBody }}</p>
          </div>
          <div class="flex items-center gap-2 my-2 cursor-pointer">
            <p class="text-[#2F80ED] capitalize">read more</p>
            <img src="../assets/icons/Vector.png" alt="vector shades" class="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
