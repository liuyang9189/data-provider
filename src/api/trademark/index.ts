import request from '@/utils/request'
import type { ResListType } from './type'
enum API {
  TRADEMARK_URL = "/admin/product/list/"
}

export const getShopList = (page: number, pageSize: number, config: any) => request.get<any, ResListType>(`${API.TRADEMARK_URL}${page}/${pageSize}`,
  {
    headers: config.headers,
    params: config.params
  })