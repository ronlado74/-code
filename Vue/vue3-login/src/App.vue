<template>
  <div v-for="(item, index) in a " :key="index" v-memo="[item === 2]">
    {{ index }} - {{ item }}
  </div>
  <router-view />
</template>

<script setup lang="ts">
const a = [1, 2, 3]
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
</style>
