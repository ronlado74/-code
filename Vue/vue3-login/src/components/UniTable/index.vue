<template>
  <div style="overflow: hidden; height: 200px;">
    <table border="1" cellspacing="0">
      <thead>
        <tr>
          <th v-for="item in props.headings">{{ item }}</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in nowData" :key="row.id">
          <td v-for="(value, key) in row" :key="key">{{ value }}</td>
          <td>
            <button @click="$emit('edit', row.id)">编辑</button>
            <button @click="$emit('del', row.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <div style="overflow: hidden">
      <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
      <span @click="changePage(pageNum)" v-for="pageNum in pageCount" class="pageColor"
        :style="[{ color: (pageNum == currentPage ? 'aqua' : 'black') }]">{{ pageNum }}</span>
      <!-- <span v-for="pageNum in pageCount" :class="[pageNum == currentPage ? 'pageColor-active' : 'pageColor']">{{ pageNum }}</span> -->
      <!-- <select v-model="currentPage">
        <option v-for="page in pageCount" :key="page" :value="page">
          {{ page }}
        </option>
      </select> -->

      <button @click="nextPage" :disabled="currentPage === pageCount">下一页</button>
    </div>
  </div>
</template>


<script setup lang='ts'>
import { ref, computed, watch } from 'vue';
import { TableData } from './tableType'

const props = defineProps(['headings', 'inputData'])
defineEmits(['del', 'edit'])



const tableData = ref(props.inputData)
const currentPage = ref<number>(1)
const pageSize = ref<number>(5)

const nowData = computed((): Array<TableData> => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return tableData.value.slice(start, end);
});

const pageCount = computed(() => Math.ceil(tableData.value.length / pageSize.value))

// watch(currentPage, () => {
//   nowData.value;
// });

const nextPage = () => {
  currentPage.value += 1;
}

const prevPage = () => {
  currentPage.value -= 1
}

const changePage = (pageNum: number) => {
  currentPage.value = pageNum
}



</script>

<style scoped>
.pageColor-active {
  color: red;
}

.pageColor {
  margin-left: 10px;
  margin-right: 10px;
}
</style>