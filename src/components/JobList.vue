<template>
  <v-container>
    <v-row v-for="job in jobsData" :key="job.id" justify="center" align="center">
      <v-col cols="12">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card width="100%" :class="{ 'on-hover': hover }">
            <v-card-text>
              <v-row align="center">
              <v-col cols="2">
                <v-avatar size="125">
                  <img :src="job.profilePicURL" />
                </v-avatar>
              </v-col>
              <v-col cols="4">
                <v-card-title>
                  {{job.company}}
                </v-card-title>
                <v-card-subtitle visible-xs-only style="font-size:2em">
                  {{job.title}}
                </v-card-subtitle>
              </v-col>
              <v-col cols="6" class="d-flex flex-row-reverse flex-wrap" >
                <v-chip
                  v-for="category in job.categories"
                  :key="category">
                  {{ category }}
                </v-chip>
              </v-col>
            </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    jobsData() {
      return this.$store.getters.filtereJobs;
    },
  },
};
</script>

<style scoped>
.v-container {
  background-blend-mode: 2px soft-light;
}
.v-card.v-sheet {
  border-left: 4px solid transparent;
}
.v-card.on-hover {
  border-left: 4px solid rgb(15, 187, 67);
  /* background-color: rebeccapurple; 
  */
}
.v-card__text {
  color: rgb(61, 12, 126) !important;
  font-size: 10px;
  font-style: italic;
  text-align: left;
  background-color: whitesmoke;
}
</style>
