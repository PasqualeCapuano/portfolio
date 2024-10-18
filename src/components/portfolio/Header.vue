<template>
  <v-container class="d-flex" fluid>
    <v-row justify="center">
      <v-col md="8" sm="12" align="center">
        <v-card class="pa-5">
          <v-card-title>
            <v-avatar size="300">
              <v-img :src="avatarImage" cover></v-img>
            </v-avatar>
          </v-card-title>
          <v-card-title>
            {{ store.author }}
          </v-card-title>
          <v-card-subtitle>
            <p>{{ store.jobTitle }} @ {{ store.company }}</p>
          </v-card-subtitle>
          <v-divider class="my-3" length="200"></v-divider>
          <v-text class="pa-5">
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
import avatarImage from '@/assets/images/linkedin.jpeg'
import Socials from './Socials.vue'

const store = settingStore()
</script>

<style></style>
