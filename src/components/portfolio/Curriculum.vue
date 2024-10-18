<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col md="8" sm="12" align="center">
        <v-card>
          <v-tabs
            v-model="tab"
            bg-color="#52796f"
            align-tabs="center"
            height="80"
          >
            <v-tab value="one">Experiences</v-tab>
            <v-tab value="two">Education</v-tab>
            <v-tab value="three">Languages</v-tab>
            <v-tab value="four">Certificates</v-tab>
          </v-tabs>

          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="one">
                <v-card flat v-for="(item, index) in store.previousCompanies">
                  <div class="experience my-5 py-5">
                    <v-card-title
                      >{{ item.name }}, {{ item.location }}</v-card-title
                    >
                    <v-card-subtitle>
                      <p>{{ item.role }}</p>
                    </v-card-subtitle>
                    <v-card-text>
                      <p>{{ item.period }}</p>
                    </v-card-text>
                    <v-card-text>
                      <p>{{ item.description }}</p>
                    </v-card-text>
                    <v-chip
                      class="ma-1"
                      color="primary"
                      v-for="chip in store.previousCompanies[index]
                        .technologies"
                      ><Icon :icon="chip.icon" class="mx-2" />
                      {{ chip.name }}</v-chip
                    >
                  </div>
                </v-card>
              </v-tabs-window-item>

              <v-tabs-window-item value="two">
                <v-card flat v-for="(item, index) in store.education">
                  <div class="experience my-5 py-5">
                    <v-card-title>{{ item.school }}</v-card-title>
                    <v-card-subtitle>
                      <p>{{ item.name }}</p>
                    </v-card-subtitle>
                    <v-card-text>
                      <p>{{ item.data }}</p>
                    </v-card-text>
                  </div>
                </v-card>
              </v-tabs-window-item>

              <v-tabs-window-item value="three">
                <v-card flat v-for="(item, index) in store.languages">
                  <div class="experience my-5 py-5">
                    <v-card-title
                      ><Icon :icon="item.flag" class="mx-2" />
                      {{ item.name }}</v-card-title
                    >
                    <v-card-subtitle>
                      <p>{{ item.level }}</p>
                    </v-card-subtitle>
                    <v-card-subtitle>
                      <p>{{ item.details }}</p>
                    </v-card-subtitle>
                  </div>
                </v-card>
              </v-tabs-window-item>

              <v-tabs-window-item value="four">
                <v-card flat v-for="(item, index) in store.certificates">
                  <div class="experience my-5 py-5">
                    <v-card-title> {{ item.title }}</v-card-title>
                    <v-card-subtitle>
                      <p>{{ item.institution }}</p>
                    </v-card-subtitle>
                  </div>
                </v-card>
              </v-tabs-window-item>
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
  border-left: 3px solid #52796f;
  border-radius: 5px;
}
</style>
