<template>
  <UniTable @del="del" @edit="edit" :headings="headings" :inputData="inputData"></UniTable>

  <UniDilog :editData="editData"></UniDilog>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { TableData } from '../components/UniTable/tableType'
import UniTable from '../components/UniTable/index.vue'
import UniDilog from '@/components/UniDilog.vue';




const inputData = ref<TableData[]>([{ id: '1', name: 'sdadasd', size: 2, version: 2.2, upData: 'wwww' },
{ id: '2', name: 'wxy', size: 2, version: 2.2, upData: '2020' },
{ id: '3', name: 'sasd', size: 3, version: 2.2, upData: '21321' },
{ id: '4', name: 'sadsad', size: 221, version: 2.2, upData: '112321' },
{ id: '5', name: 'sda1221313dasd', size: 2, version: 2.2, upData: '12312' },
{ id: '6', name: '1111', size: 211, version: 2.2, upData: '312' },
{ id: '7', name: 'qeqwrq', size: 12321, version: 2.2, upData: '312' },
{ id: '8', name: 'yutut', size: 2131313, version: 2.2, upData: '31' },
{ id: '9', name: 'bnbvnv', size: 312321312, version: 2.2, upData: '312' },
{ id: '10', name: 'awn', size: 22, version: 2.2, upData: '312' },
{ id: '11', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '12', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '13', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '14', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '15', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '16', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '17', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '18', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '19', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '20', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '21', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '22', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '23', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '24', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '25', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '26', name: 'test', size: 21312, version: 2.2, upData: '312' },
{ id: '27', name: 'test', size: 21312, version: 2.2, upData: '312' },
])

const headings = ["ID", "名称", "大小", "版本", "更新时间"]

const editData = ref<TableData>()




const del = (id: string) => {
  inputData.value.forEach((value, index, array) => {
    if (value.id === id) {
      array.splice(index, 1)
    }
  })
}

const edit = (id: string) => {
  inputData.value.forEach((value, index, array) => {
    if (value.id === id) {
      editData.value = value
    }
  })
}

</script>
<style scoped lang='less'></style>