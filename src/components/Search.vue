<template>
  <v-autocomplete
    chips
    clearable
    deletable-chips
    multiple
    small-chips
    v-model="categoryfilter"
    :items="categories"
    hide-no-data
  ></v-autocomplete>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    categoryfilter: {
      get() {
        return this.$store.getters.searchdata;
      },
      set(value) {
        this.$store.dispatch("addSearch", value);
      },
    },
  },
};
</script>
