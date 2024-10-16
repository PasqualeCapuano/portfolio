<template>
  <v-footer dark color="#23283f" class="d-flex justify-center">
    <v-container>
      <v-row>
        <v-col align="center" cols="3"></v-col>
        <v-col align="center" cols="6">
          <p>
            &copy; {{ counterStore.year }} Your Company. All rights reserved
            {{ counterStore.author }}
          </p></v-col
        >
        <v-col align="center" cols="3"></v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { settingStore } from '../../stores/personal'

const counterStore = settingStore()
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
