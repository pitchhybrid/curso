<template>
 <div>
    <navbar></navbar>
    <hr>
    <router-view></router-view>
 </div>
</template>

<script>

export default {
  name:'App',
}
</script>

<style scoped>
hr{
  margin-bottom: 5px;
}
</style>

