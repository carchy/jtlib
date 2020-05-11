/**  
 * RxmImage插件
 * @see RxmImage插件,图片插件,图片的相关功能，可以进行选择、导出、裁剪、浏览、存入系统相册等一系列针对图片的操作。
 * @see RxmImage插件使用示例
 * ```
   //插件引用
   define(['RxmImage'],function(RxmImage){
      
   }
 * ```
 * @version  1.4.3 
 */

/**
 * 照片选择器参数
 */
type pickerArg = {

  callback:
  /** 回调函数
   *@param e
   *@param data data.status:是否成功1/0,status=1时 ，data.data为导出的图片地址构成的数组
   */
  (e: Event, data: Object) => boolean | undefined,
  /**用户数据*/
  data?: Object,
  /**最小选择数量,传0表示无限制，默认值1 */
  min?: number,
  /** 图片压缩质量 取值范围 0-1 越大表示质量越好，默认值0.5*/
  quality?: number,
  /** 用png格式导出图片,此参数为1时,quality参数无效，默认值0*/
  usePng?: number,
  /** 此参数为1时,回调中会包含图片的额外信息，默认值0；*/
  detailedInfo?: number
}

type browserArgData = {
  /**图片路径  */
  src: String
}
/**
 * 图片浏览器参数
 */
type browserArg = {
  /** 图片路径，必选 */
  data: Array<browserArgData>,
  /** 非负整数 起始图片位置，默认值0*/
  startIndex?: Number,
  /** 1:显示分享按钮 ,0隐藏，默认值0*/
  displayActionButton?: Number,
  /** 1:允许九宫格视图 ,0 不允许，默认值1*/
  enableGrid?: Number,
  /** 1:以九宫格视图起始，默认值0*/
  startOnGrid?: Number,
  /** 显示切换箭头(仅iOS支持此参数)，默认值0*/
  displayNavArrows?: Number,
  /** 是否支持保持到相册，1支持，0不支持*/
  supportCacheToAlbum?: Number
}
/**
 * 在线图片参数
 */
type imgOnlineArg = {
  /** 下载文件id */
  href?: string,
  /** 非负整数 起始图片位置，默认值0*/
  startIndex?: Number,
  /** 1:显示分享按钮 ,0隐藏，默认值0*/
  displayActionButton?: Number,
  /** 1:允许九宫格视图 ,0 不允许，默认值1*/
  enableGrid?: Number,
  /** 1:以九宫格视图起始，默认值0*/
  startOnGrid?: Number,
  /** 显示切换箭头(仅iOS支持此参数)，默认值0*/
  displayNavArrows?: Number,
  /** 是否支持保持到相册，1支持，0不支持*/
  supportCacheToAlbum?: Number
}

/**
 * 图片裁剪器参数
 */
type cropperArg = {

  callback:
  /** 回调函数
   *@param e
   *@param data  status-是否储存成功 1/0 info-status=1 裁剪后的图片地址 ，status=0 错误信息
   */
  (e: Event, data: Object) => boolean | undefined,
  /**用户数据*/
  data?: Object,
  /** 图片路径 支持ci:// file:// res:// */
  src?: string,
  /** JPG压缩质量 取值范围 0-1 越大表示质量越好 默认值0.5*/
  quality?: Number,
  /** 1:用png格式导出图片 ,此参数为1时,quality参数无效 默认值0**/
  usePng?: Number,
  /** 1：正方型裁剪； 2- 圆形裁剪(仅iOS支持)；3-任意比例剪裁（仅 Android 支持）默认值1*/
  mode?: Number
}
/**
 * 视频选择器参数
 */
type videoPickerArg = {

  callback:
  /** 回调函数
   *@param e
   *@param data 
   */
  (e: Event, data: videoData) => boolean | undefined,
  /**用户数据，可选*/
  data?: Object,
  /**1返回视频缩略图的 base64，0 不返回 */
  needBase64?: Number
}

type videoData = {
  /** 视频本地文件路径*/
  videoPath: String,
  /** 视频缩略图*/
  thumbnail: String,
  /** 视频缩略图 Base64*/
  thumbnailBase64: String
}
/**
 * base64参数
 */
type getBase64Arg = {
  callback:
  /** 回调函数
   *@param e
   *@param data  data.imagePath 源图片地址,data.base64 base64码
   */
  (e: Event, data: Object) => boolean | undefined,
  /**用户数据*/
  data?: Object,
  /** 本地图片地址 file:// 或 ci:// 文件类型只支持 png 和 jpg*/
  url: string,
  /** :是否添加前缀 'data:image/png;base64,' 或 'data:image/jpeg;base64,' ,0:不需要，默认1. 必须添加前缀才能在html中正常使用*/
  needPrefix?: Number,
  /** 缩略图默认宽度,默认100**/
  width?: Number,
  /** 缩略图默认高度,默认100*/
  hight?: Number,
  /** 图片默认质量 0-100，默认100*/
  quality?: Number
}
interface RxmImage {
  /**
   * 打开照片选择器
   * @param arg  照片选择器参数
   */
  openPicker(arg: pickerArg): void

  /**
   * 打开一个可以浏览图片的浏览器
   * @param arg  图片浏览器参数
   */
  openBrowser(arg: browserArg): void

  /**
   * 打开在线图片
   * @param arg  在线图片参数
   */
  openImgOnline(arg: imgOnlineArg): void

  /**
   * 打开一个图片裁剪器,导出裁剪后的图片,并返回图片路径
   * @param arg  图片裁剪器参数
   */
  openCropper(arg: cropperArg): void

  /**
   * 打开视频选择器
   * @param arg  视频选择器参数
   */
  openVideoPicker(arg: videoPickerArg): void

  /**
   * 获取本地图片的缩略图的base64字符串
   * @param arg  base64参数
   */
  getThumbnailBase64(arg: getBase64Arg): void

}


