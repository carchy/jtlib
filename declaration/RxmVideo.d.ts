/**
 * RxmVideo插件
 * @see RxmVideo插件,视频插件,提供移动端打开及关闭视频播放器，录制视频功能
 * @see RxmVideo插件使用示例
 * ```
   //插件引用
   define(['RxmVideo'],function(RxmVideo){
      
   }
 * ```
 * @version  1.4.3
 */
/**
 * 自定义视频播放器sources参数
 */
declare type sources = {
    /** 视频url*/
    url?: String;
    /** 视频下载url*/
    downloadUrl?: String;
    /** 视频下载文件大小*/
    downloadSize?: String;
    /** 码率名称【超清，高清，低情】*/
    name?: String;
    /**码率名称【超清：4，高清：3，标清：2，低情：1】*/
    type?: number;
    /**码率排序*/
    sort?: String;
};
/**
 * 自定义视频播放器参数
*/
declare type ormPlayerArg = {
    /** 视频唯一id*/
    id: String;
    /** 视频标题*/
    title: String;
    /** 码率列表*/
    sources?: sources;
    /** 是否支持记住播放位置 ，1:支持，0：不支持，默认1*/
    supportRecordPlayPosition?: number;
    /** 在线视频播放时，优先播放本地缓存文件，1:支持，0：不支持，默认1*/
    supportLocalPref?: number;
    /** 是否支持快速播放 ，1:支持，0：不支持，默认0*/
    supportAcceleratedPlay?: number;
};
/**
 * 自定义视频播放器界面定制参数
 */
declare type openVideoPlayerArg = {
    /** 播放文件路径。支持本地路径wgt://,res://,file://和网络路径http://,https://*/
    src: String;
    /** 视频开始播放时间,单位为s(秒)。默认为0。*/
    startTime?: Number;
    /** 是否自动开始。默认为false。*/
    autoStart?: Boolean;
    /** 是否强制全屏,默认为false。*/
    forceFullScreen?: Boolean;
    /** 是否显示关闭按钮,用户可以通过点击此按钮关闭播放器。默认为false。*/
    showCloseButton?: Boolean;
    /** 是否显示缩放按钮,用户可以通过点击此按钮切换全屏/非全屏模式。默认为true*/
    showScaleButton?: Boolean;
    /** 范围(0,1]，小窗播放器宽度相对屏幕宽度比例, 默认值为1，屏幕宽度。*/
    width?: Number;
    /** 范围>0，小窗播放器高度相对 width 的比例。默认值为9/16*/
    height?: Number;
    /** 范围[0,1]。小窗播放器左边距相对屏幕宽度比例。默认为0*/
    x?: Number;
    /** 范围[0,1]。小窗播放器上边距相对屏幕高度比例。默认为0*/
    y?: Number;
    /** 普通状态下播放器是否跟随网页滑动。默认为true。*/
    scrollWithWeb?: Boolean;
};
/**
 * 关闭视频播放器参数
 */
declare type closePlayerArg = {
    callback: 
    /** 回调函数
     *@param e
     *@param data   src：String 视频文件路径 currentTime：Number 被关闭时视频正在播放的时间
     */
    (e: Event, data: Object) => boolean | undefined;
    /**用户数据*/
    data?: Object;
};
/**
 * 录制视频参数
 */
declare type recordPlayerArg = {
    callback: 
    /** 回调函数，必填
     *@param e
     *@param data  result：Number 录制结果。 0-录制成功 1-用户取消录制 2-视频录制或者压缩过程发送错误
       path：String仅录制成功时才会有此参数,录制压缩得到的视频文件路径
     */
    (e: Event, data: Object) => boolean | undefined;
    /**用户数据*/
    data?: Object;
    /** 视频录制最大时间,单位s(秒)*/
    maxDuration: Number;
    /** 视频分辨率类型,取值为0,1,2,默认为0。0:1920x1080, 1:1280x720, 2:640x480*/
    qualityType?: Number;
    /** 视频录制时采样率类型,取值为0, 1, 2, 默认为0, 0: 高采样率, 1: 中采样率, 2: 低采样率*/
    bitRateType?: Number;
    /** 输出的视频文件格式,默认为mp4，Android 平台上支持的的视频文件格式有:mp4、3gp; IOS支持的压缩视频文件格式有:mp4,mov*/
    fileType?: String;
};
interface RxmVideo {
    /**
     * 打开视频播放器
     * @param arg  视频文件url
     */
    openSystemPlayer(arg: String): void;
    /**
     * 打开自定义视频播放器
     * @param arg  自定义视频播放器参数
     */
    openOrmPlayer(arg: ormPlayerArg): void;
    /**
     * 打开在线视频
     * @param herf  视频文件下载id
     */
    openOnlineVideo(herf: String): void;
    /**
     * 打开自定义视频播放器，支持界面定制
     * @param arg  自定义视频播放器界面定制参数
     */
    openPlayer(arg: openVideoPlayerArg): void;
    /**
     * 关闭视频播放器
     * @param arg 关闭视频播放器参数
     */
    closePlayer(arg: closePlayerArg): void;
    /**
     * 录制视频
     * @param arg  录制视频参数
     */
    record(arg: recordPlayerArg): void;
}
