/**  
 * RxmPhone插件
 * @see RxmPhone插件,提供移动端拨打电话和发送短信功能
 * @see RxmPhone插件使用示例
 * ```
   //插件引用
   define(['RxmPhone'],function(RxmPhone){
      
   }
 * ```
 * @version  1.4.3 
 */

 /** */
interface RxmPhone {
  /**
   * 拨号功能
   * @param arg  电话号码
   */
  call(arg: Number): void
  /**
  * 发送短信
  * @param number 电话号码如发送多人，需用逗号分隔，例如：'12345678911,12312312312',逗号必须为英文字符。
  * @param content 必选 短息内容
  */
  sms(number: Number, content: String): void

}


