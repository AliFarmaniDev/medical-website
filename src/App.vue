<script setup>
import { RouterView } from 'vue-router'
//import header and footer components
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
