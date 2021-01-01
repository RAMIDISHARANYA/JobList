<template>
    <!-- <div>Job List View</div> -->
    <div> 
        <search-component></search-component>
        <job-list></job-list>
    </div>
</template>

<script>
import searchComponent from '../components/Search.vue';
import JobList from '../components/JobList.vue';
export default {
    components: {
        searchComponent,
        JobList,
    }
    
}
</script>

<style lang="less">

</style>
