<template>
  <div>{{iid}}</div>
</template>

<script>
  export default {
    name: "Detail",
    data(){
      return{
        iid: null
      }
    },

    created() {
      this.iid = this.$route.params.iid;
    },

    deactivated() {
      this.$destroy('Detail');
    },

    destroyed() {
      console.log('destroyed');
    }
  }
</script>

<style scoped>

</style>