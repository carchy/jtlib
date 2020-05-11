/**  
 * RxmDevice插件
 * @see RxmDevice插件,设备信息插件
 * @see RxmDevice插件使用示例
 * ```
   //插件引用
   define(['RxmDevice'],function(RxmDevice){
      
   }
 * ```
 * @version  1.4.3 
 */

/**
 * 设备信息参数
 */
 type deviceInfoArg = {
  
       callback: 
       /** 回调函数
        *@param e
        *@param data 设备信息
        */
       (e: Event, data: deviceData) => boolean | undefined,
        /**用户数据*/
       data?: Object,
 }
/**
 * 设备信息
 */
 type deviceData = {
        /**设备唯一标志 */
        ODID: String,
        /** 手机号*/
        MOBILE?: String,
        /** mac地址*/
        MAC_ADDRESS?: String,
        /** 设备型号 */
        MODEL: String,
        /** 系统*/
        OS: String,
        /** 分辨率 */
        WINDOWSIZE: String,
        /** 终端厂商 */
        MANUFACTURER: String
 }

interface RxmDevice{
      /**
       * 获取设备信息
       * @param arg  设备信息参数
       */
      getDeviceInfo(arg:deviceInfoArg):void


}


