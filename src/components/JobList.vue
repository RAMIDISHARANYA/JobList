<template>
    <div>
        <!-- Job List -->
        <p v-for="job in jobsData" :key='job.id'>
           
             <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-card color="green">
             {{ job.title }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
        </p>
    </div>
   
</template>

<script>
export default {
    computed: {
        jobsData() {
            console.log(this.$store.getters.filtereJobs);
          return  this.$store.getters.filtereJobs;
        }
    }
}
</script>

<style>
p {
  list-style-type: square;
}
.v-card__title {
  font-style: italic;
}
.v-card__text {
  color: rgb(7, 7, 190)!important;
}
</style>
  <v-card-title class="green darken-4">Chocolate cheesecake recipe</v-card-title>
          <v-card-text class="pt-2">
            <ul class="subtitle-2">
              <li>5 eggs</li>
              <li>1 cup of warm milk</li>
              <li>2 cups of flour</li>
              <li>1/2 cup of sugar</li>
              <li class="red--text">1 lbs Philadelphia cream cheese </li>
              <li>...</li>
            </ul>
          </v-card-text>