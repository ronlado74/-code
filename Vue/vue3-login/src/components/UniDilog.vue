<template>
  <input type="text" :value="props.editData ? props.editData.name : ''">
  <div>{{ props.editData ? props.editData.name : '' }} </div>
</template>

<script setup lang='ts'>
import { ref, computed, watch } from 'vue';

const props = defineProps(['editData'])


</script>
<style scoped lang='less'></style>