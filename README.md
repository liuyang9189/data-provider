# data-provider
vite+vue3+ts项目下针对el-table以及el-pagination的二次封装

## 使用方式
```javascript
<DataProvider
  :provider="getShopList"
  @before-data-load="beforeLoad" @data-loaded="dataLoaded"
  :condition="condition"
  v-slot="{loading,data}"
>
  <el-table
    border
    :data="data"
    v-loading="loading"
  >
    ...
  </el-table>
</DataProvider>

import DataProvider from '@/components/data-provider/data-provider.vue';
import {getShopList} from '@/api/trademark'
const beforeLoad = () => { 
  console.log('---beforeLoad');
}
const dataLoaded = (data: any) => { 
  console.log(data, '----dataloaded');
}
const condition = {
  pageNo: 2,
  pageSize: 6,
  headers: {
    caca: 123
  },
  params: {
    id: 'aa'
  }
}
```