<template>
  <v-container>
    <v-row>
      <v-col md="12" sm="12" align="center">
        <v-btn
          v-for="social in store.socials"
          :key="social.id"
          :href="social.url"
          target="_blank"
          :color="social.color"
          class="ma-2"
        >
          <Icon :icon="social.icon" />
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { settingStore } from '../../stores/personal'
import { Icon } from '@iconify/vue'

const store = settingStore()

console.log(store.socials)
</script>
