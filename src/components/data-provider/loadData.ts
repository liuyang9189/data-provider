import { reactive, ref, toRefs, watch } from 'vue'
import type { Records } from '@/api/trademark/type'
import type { PageOptionsType } from './type'
export default function loadData(provider: Function, condition: any, $emit: any) {
  let loading = ref(true)
  let pageOptions = reactive<PageOptionsType>({
    pageNo: 1,
    pageSize: 3,
    total: 0
  })
  let options = Object.assign(pageOptions, condition)

  let data = ref<Records[]>([])
  watch([() => pageOptions.pageNo, () => pageOptions.pageSize], async ([pageNo, pageSize]) => {
    $emit('before-data-load')
    loading.value = true
    const { code, data: datas } = await provider(pageNo, pageSize, {
      headers: options.headers,
      params: options.params
    })
    $emit('data-loaded', datas)
    if (code === 200) {
      pageOptions.total = datas.total
      data.value = datas.records
    }
    loading.value = false
  }, {
    immediate: true
  })


  return {
    loading,
    ...toRefs(pageOptions),
    data
  }
}