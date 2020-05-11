/**  
 * RxmCamera插件
 * @see RxmCamera插件,拍照插件,提供移动端打开摄像头拍照功能
 * @see RxmCamera插件使用示例
 * ```
   //插件引用
   define(['RxmCamera'],function(RxmCamera){
      
   }
 * ```
 * @version  1.4.3 
 */

/**
 * 拍照信息
 */
type openCameraArg = {
        
       callback:
       /** 回调函数
        *@param e
        *@param data 拍照成功后图片的保存路径
        */
       (e: Event, data: String) => boolean | undefined,
       /**用户数据*/
       data?: Object,
       /** 图片是否压缩,1表示压缩,0或者不传表示不压缩*/
       comtextareass?: Number,
       /** 图片压缩质量,comtextareass为1时有效,取值范围[0,100]*/
       quality?: Number,
       /** 宽度*/
       width?: Number,
       /** 高度*/
       height?: Number,
}

interface RxmCamera {
  /**
   * 调用系统相机,进入拍照界面
   * @param arg  拍照信息
   */
  open(arg: openCameraArg): void
  

}


