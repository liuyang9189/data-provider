<template>
  <el-card class="box-card">
      <DataProvider
        :provider="getShopList" @before-data-load="beforeLoad" @data-loaded="dataLoaded"
        :condition="condition"
        v-slot="{loading,data}"
      >
        <el-table
          border
          :data="data"
          v-loading="loading"
        >
          <el-table-column label="序号" width="80px" align="center" type="index"></el-table-column>
          <el-table-column label="品牌名称" prop="skuName"></el-table-column>
          <el-table-column label="品牌logo">
            <template #="{row}">
              <div style="display: flex; align-items: center; justify-content: center;">
                  <el-image style="width: 100px; height: 100px" :src="row.skuDefaultImg" fit="cover" />
              </div>
          </template>
          </el-table-column>
          <el-table-column label="品牌操作">
              <el-button type="primary" size="small" icon="Edit"></el-button>
              <el-button type="danger" size="small" icon="Delete"></el-button>
          </el-table-column>
        </el-table>
      </DataProvider>
    </el-card>
</template>
<script setup lang="ts">
import DataProvider from '@/components/data-provider/data-provider.vue';
import {getShopList} from '@/api/trademark'
const beforeLoad = () => { 
  console.log('---beforeLoad');
}
const dataLoaded = (data: any) => { 
  console.log(data, '----dataloaded');
}
const condition = {
  // pageNo: 2,
  // pageSize: 6,
  // headers: {
  //   caca: 123
  // },
  // params: {
  //   id: 'aa'
  // }
}
</script>
<style scoped>
</style>
