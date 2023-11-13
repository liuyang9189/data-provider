<template>
<slot :data="data" :loading="loading"></slot>
<el-pagination
  v-model:current-page="pageNo"
  v-model:page-size="pageSize"
  :page-sizes="[3, 5, 7, 9]"
  :background="true"
  layout="prev, pager, next, jumper,->, sizes, total"
  :total="total"
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  v-loading="loading"
/>
</template>

<script setup lang="ts">
import useLoadData from './loadData'
const props = defineProps({
  provider: {
    type: Function,
    required: true
  },
  condition: {
    type: Object
  }
})
const $emit = defineEmits(['before-data-load', 'data-loaded'])

const {
  loading,
  data,
  pageNo,
  pageSize,
  total
} = useLoadData(props.provider, props.condition, $emit)
const handleSizeChange = (pageSize: number) => { 
  pageSize = pageSize
  
}
const handleCurrentChange = (pageNo:number) => { 
  pageNo = pageNo
}
defineExpose({
  loading,
  data,
  pageNo,
  pageSize,
  total
})
</script>

<style scoped>

</style>