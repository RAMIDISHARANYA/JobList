<template>
  <v-app>
    <v-main>
      <search></search>
      <job-list></job-list>
    </v-main>
  </v-app>
</template>

<script>
import JobList from './components/JobList.vue';
import Search from './components/Search.vue';

export default {
  name: 'App',
  components: {
    JobList,
    Search,
  },
};
</script>