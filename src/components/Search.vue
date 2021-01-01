<template>
    <div>
        <v-autocomplete
        chips
        clearable
        deletable-chips
        filled
        multiple
        small-chips
        v-model="categoryfilter"
        :items="categories"
        hide-no-data
        ></v-autocomplete>
        <!-- <input type="text"> -->
        <!-- {{ categories }} -->
        <v-hover></v-hover>
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         inputs:null
    //     }
    // },
    computed: {
        categories() {
        
            return this.$store.getters.categories;
        },
        //  console.log(this.$store.getters.categories);
        categoryfilter: {
            get(){
                return this.$store.getters.searchdata;
            },
            set(value){
                this.$store.dispatch('addSearch', value);
            }
         }
    }
};
</script>

<style>

</style>