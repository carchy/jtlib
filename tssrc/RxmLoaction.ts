/**  
 * RxmLoaction插件
 * @see RxmLoaction插件,定位功插件,同时使用GPS,GPRS,WIFI三种方式联合定位,取最先返回值
 * @see RxmLoaction插件使用示例
 * ```
   //插件引用
   define(['RxmLoaction'],function(RxmLoaction){
      
   }
 * ```
 * @version  1.4.3 
 */
/**
 * 打开定位参数
 */
type openLocationArg = {

  callback:
  /** 回调函数
   *@param e
   *@param data lat:""维度 log:""经度
   */
  (e: Event, data: Object) => boolean | undefined,

  callbackOpen:
  /** 打开定位回叫函数
   *@param e
   *@param data 
  */
  (e: Event, data: Number) => boolean | undefined,
  /**用户数据*/
  data?: Object,
  /** true-持续监听位置变化；false或未定义-只返回一次当前位置信息*/
  onChange?: boolean,
}
/**
 * 获取地址信息参数
 */
type getAddressArg = {

  callback:
  /** 回调函数，必填
   *@param e
   *@param data 地址详细信息
   */
  (e: Event, data: Object) => boolean | undefined,
  /** 维度*/
  lat: number,
  /** 经度*/
  log: number,
  /** 默认data是地址名称，为1时data为地址详情(JSON格式)*/
  flag?: number
}
/**
 * 导航参数
 */
type navigationArg = {
  /**起点位置名称*/
  startName: string,
  /**起点位置经度*/
  startLng: number,
  /**起点位置纬度*/
  startLat: number,
  /**终点位置名称*/
  endName: string,
  /**终点位置经度*/
  endLng: number,
  /**终点位置纬度*/
  endLat: number,
  /**坐标系类型， 1：国测局坐标（火星坐标，GCJ02，高德地图）2：百度坐标（BD09）3：世界坐标（WGS84）*/
  coorType: number
}

interface RxmLoaction {
  /**
   * 打开定位获取位置
   * @param arg  打开定位参数
   */
  openLocation(arg: openLocationArg): void
  /**
   * 关闭定位功能,不再监听位置信息
   */
  closeLocation(): void
  /**
   * 根据经纬度获取对应的地址信息 
   * @param arg  获取地址信息参数
   */
  getAddress(arg: getAddressArg): void
  /**
   * 调用手机安装的地图 app 进行导航，默认驾车模式，进入第三方 app 后可以自行切换导航模式。 
   * @param arg  导航参数
   */
  navigationByApps(arg: navigationArg): void

}


