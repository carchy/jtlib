/**  
 * RxmSpeech插件
 * @see RxmSpeech插件,语音识别插件
 * @see RxmSpeech插件使用示例
 * ```
   //插件引用
   define(['RxmSpeech'],function(RxmSpeech){
      
   }
 * ```
 * @version  1.4.3 
 */
/**
 * 语音识别参数
 */
type startSpeechArg = {

  callback:
  /** 回调函数
   *@param {Event} e
   *@param {Object} data data.data: 返回语音识别结果
   */
  (e: Event, data: Object) => boolean | undefined,
}
interface RxmSpeech {
  /**
   * 开启语音识别
   * @param arg  语音识别参数
   */
  start(arg: startSpeechArg): void


}


