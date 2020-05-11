/**  
 * RxmScanner插件
 * @see RxmScanner插件,二维码扫描插件
 * @see RxmScanner插件使用示例
 * ```
   //插件引用
   define(['RxmScanner'],function(RxmScanner){
      
   }
 * ```
 * @version  1.4.3 
 */
/**
 * 扫描功能参数
 */
type openScannerArg = {

  callback:
  /** 回调函数
   *@param e
   *@param data data.status: 1 成功，0 失败。失败时一般是用户禁止了APP摄像头权限
   data.data: 返回二维码扫描结果字符串
   */
  (e: Event, data: Object) => boolean | undefined,
}
/**
 * 二维码参数
 */
type createQRArg = {

  callback:
  /** 回调函数
   *@param e
   *@param data 返回生成的二维码图片本地地址
   */
  (e: Event, data: String) => boolean | undefined,
  /** 需要生成二维码的内容*/
  content: String
}
interface RxmScanner {
  /**
   * 开启扫描功能
   * @param arg  扫描功能参数
   */
  open(arg: openScannerArg): void
  /**
   * 根据文本创建对应二维码图片
   * @param arg  二维码参数
   */
  createQR(arg: createQRArg): void

}


