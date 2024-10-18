<script setup>
import { settingStore } from '../stores/personal'
import { Icon } from '@iconify/vue'
import Footer from '../components/commons/Footer.vue'
import Header from '../components/portfolio/Header.vue'
import Curriculum from '../components/portfolio/Curriculum.vue'

const counterStore = settingStore()
</script>

<template>
  <main class="main">
    <Header />
    <Curriculum />
    <Footer />
  </main>
</template>

<style>
@import '../assets/main.css';

.main {
  background-color: var(--personal-secondary);
}
</style>
