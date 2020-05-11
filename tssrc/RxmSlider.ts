/**  
 * slider插件
 * @see slider展现插件
 * ```
   //插件引用
   define(['RxmSlider'],function(Slider){
        
   }
 * ```
 * @version  1.4.3 
 */

/**
 * 单个slider对象
 */

interface Slider{

   /**
    * 播放下一张滚动横幅
    * @returns void
    */
   next():void

   /**
    * 播放前一张滚动横幅
    * @returns void
    */
   prev():void

   /**
    * 播放指定index顺序的横幅
    * @returns void
    */
   _to( index:number):void

   /**
    * 获取容器id
    * @param scope this对象
    */
   attrId():string
   
   /**
    * 点击事件回调
    * @param arg 参数对象
    * @param scope this对象
    */
   bindTapEvent(arg:Function):void

}
