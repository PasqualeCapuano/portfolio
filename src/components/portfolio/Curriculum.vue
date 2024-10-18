<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <v-card>
          <v-tabs v-model="tab" bg-color="primary">
            <v-tab value="one">Experiences</v-tab>
            <v-tab value="two">Education</v-tab>
            <v-tab value="three">Languages</v-tab>
            <v-tab value="four">Certificates</v-tab>
          </v-tabs>

          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="one">
                <v-card
                  class="experience my-5 py-5"
                  v-for="(item, index) in store.previousCompanies"
                >
                  <v-card-title
                    >{{ item.name }}, {{ item.location }}</v-card-title
                  >
                  <v-card-subtitle>
                    <p>{{ item.role }}</p>
                  </v-card-subtitle>
                  <v-card-text>
                    <p>{{ item.period }}</p>
                  </v-card-text>
                  <v-chip
                    class="ma-1"
                    color="primary"
                    v-for="chip in store.previousCompanies[index].technologies"
                    ><Icon :icon="chip.icon" class="mx-2" />
                    {{ chip.name }}</v-chip
                  >
                </v-card>
              </v-tabs-window-item>

              <v-tabs-window-item value="two"> Two </v-tabs-window-item>

              <v-tabs-window-item value="three"> Three </v-tabs-window-item>
              <v-tabs-window-item value="four"> Four </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { settingStore } from '../../stores/personal'
import { Icon } from '@iconify/vue'

const store = settingStore()

const tab = ref('one')
</script>

<style>
.experience {
  text-align: left;
  border-left: 3px solid #1976d2;
}
</style>
