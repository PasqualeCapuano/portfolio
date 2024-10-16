<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <v-card>
          <v-card-title>
            <v-avatar color="primary" size="200">
              <v-img
                src="https://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png"
                cover
              ></v-img>
            </v-avatar>
          </v-card-title>
          <v-card-title>
            <h1>{{ store.author }}</h1>
          </v-card-title>
          <v-card-subtitle>
            <p>{{ store.jobTitle }} @ {{ store.company }}</p>
          </v-card-subtitle>
          <v-divider></v-divider>
          <v-text class="pa-3">
            <p>{{ store.bio }}</p>
          </v-text>

          <Socials />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { settingStore } from '../../stores/personal'
import Socials from './Socials.vue'

const store = settingStore()
</script>

<style></style>
