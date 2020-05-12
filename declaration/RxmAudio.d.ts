/**
 * RxmAudio插件
 * @see RxmAudio插件,音频插件，提供移动端打开及关闭音频播放器，录制音频文件功能
 * @see RxmAudio插件使用示例
 * ```
   //插件引用
   define(['RxmAudio'],function(RxmAudio){
      
   }
 * ```
 * @version  1.4.3
 */
/**
 * 打开音频参数
 */
declare type openPlayerArg = {
    callback: 
    /** 回调函数
          *@param  e
          *@param data
          */
    (e: Event, data?: String) => boolean | undefined;
    /**用户数据*/
    data?: object;
    /**要播放的所有音频路径, ci://,citp://,file://,以逗号分隔;*/
    paths: String;
    /**索引*/
    index: Number;
};
/**
 * 录音参数
 */
declare type recordArg = {
    callback: 
    /** 回调函数
          *@param  e
          *@param data
          */
    (e: Event, data?: String) => boolean | undefined;
    /**用户数据*/
    data?: object;
    /**录音格式,默认为2；0:AMR格式,1:CAF格式,2:MP3格式。iOS只支持CAF格式,MP3格式；Android只支持AMR格式,MP3格式。*/
    mode: Number;
    /**文件名称,默认以当前时间作为文件名*/
    fileName: String;
};
/**
 * 后台录音参数
 */
declare type backgroundRecordArg = {
    callback: 
    /** 回调函数
          *@param  e
          *@param data
          */
    (e: Event, data?: String) => boolean | undefined;
    /**用户数据*/
    data?: Object;
    /**录音格式,默认为2；0:AMR格式,1:CAF格式,2:MP3格式。iOS只支持CAF格式,MP3格式；Android只支持AMR格式,MP3格式。*/
    mode: Number;
    /**文件名称,默认以当前时间作为文件名*/
    fileName: String;
};
/**
 * 后台播放参数
 */
declare type openArg = {
    callback: 
    /** 回调函数
          *@param  e
          *@param data 播放次数
          */
    (e: Event, data: String) => boolean | undefined;
    /**用户数据*/
    data?: Object;
    /**音频文件路径,*/
    path: String;
    /**重复次数,-1:无限循环,0:不循环repeats：Number*/
    repeats?: Number;
};
/**
 * 在线播放参数
 */
declare type onlineAudioArg = {
    callback: 
    /** 回调函数
          *@param  e
          *@param data 播放次数
          */
    (e: Event, data: String) => boolean | undefined;
    /**用户数据*/
    data?: Object;
    /**音频文件id,为下载插件中设置的fileId*/
    url: String;
};
export default interface RxmAudio {
    /**
     * 打开音频文件
     * @param arg  打开音频参数
     */
    openPlayer(arg: openPlayerArg): void;
    /**
     * 关闭音频播放器
     */
    closePlayer(): void;
    /**
     * 打开录音界面
     * @param arg  录音参数
     */
    record(arg: recordArg): void;
    /**
     * 开始后台录音
     * @param arg  后台录音参数
     */
    startBackgroundRecord(arg: backgroundRecordArg): void;
    /**
     * 停止后台录音
     */
    stopBackgroundRecord(): void;
    /**
     * 后台播放,iOS支持MP3、CAF格式,Android支持MP3、AMR格式
     * @param arg  后台播放参数
     */
    open(arg: openArg): void;
    /**
     * 暂停后台播放
     */
    pause(): void;
    /**
     * 重播
     */
    replay(): void;
    /**
     * 停止后台播放
     */
    stop(): void;
    /**
     * 在线播放音频，为后台播放
     * @param arg  在线播放参数
     */
    openOnlineAudio(arg: onlineAudioArg): void;
}
export {};
