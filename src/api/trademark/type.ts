
export interface Records {
  id?: number,
  createTime?: string,
  updateTime?: string,
  spuId?: number,
  price: number,
  skuName: string,
  skuDesc: string,
  weight: string,
  tmId: number,
  category3Id: number,
  skuDefaultImg: string,
  isSale: number,
  skuImageList: unknown,
  skuAttrValueList: unknown,
  skuSaleAttrValueList: unknown
}

interface ListData {
  records: Records[],
  total: number
}
export interface ResListType {
  code: number,
  message: string,
  data: ListData,
  ok: boolean
}