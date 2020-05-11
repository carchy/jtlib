/**  
 * RxmDownload插件
 * @see RxmDownload插件,下载插件，适用于移动端下载文件
 * @see RxmDownload插件使用示例
 * ```
   //插件引用
   define(['RxmDownload'],function(RxmDownload){
      
   }
 * ```
 * @version  1.4.3 
 */
/**
 * 文件信息
 */
type fileInfo = {
  /** 文件id或下载地址*/
  fileId: String,
  /** 文件大小，用于显示下载总进度*/
  fileSize?: String,
  /** 下载后文件保存路径 */
  filePath?: String,
  /** 下载管理器中显示的名字，不设置时默认为url 中最后一个斜杠后问号前（若存在）的字符串*/
  title?: String,
  /** 下载管理器中显示的图片，不设置显示本地默认图片*/
  picUrl?: String,
  /** 自定义的id 用于判断文件是否存在于下载队列中，不设置默认为空*/
  resId?: String,
  /** 文件类型 0-video 1-audio 2-pdf 3-office文件 4-图片 5:其他，不设置默认5,无法在下载管理器里面打开文件*/
  fileType?: number,
  /** 下载完成后需要进行文件的操作 0-无操作 1-爱课程（ps 解压缩文件），不设置默认为0*/
  handleType?: number,
  /** 剧集的id，不设置默认为空 */
  groupId?: String,
  /** 剧集的名称，不设置默认为空*/
  groupName?: String,
  /** 剧集的图片，不设置默认为空*/
  groupPicUrl?: String,
  /** 附加信息，不设置默认为空*/
  tag?: String,
}

/**
 * 下载参数
 */
type downFliesArg = {
  /** 必选 Array.<rxm.download.file> 待下载文件信息
          * @param {Array.<rxm.download.file> }
         */
  files: Array<fileInfo>,
  /** 可选 下载完成后是否打开文件。false-不打开,true-打开第一个,string-打开指定fileId的文件
  */
  openDowned: String | boolean,

  singleFileStatusCallback?:
  /** 单个文件下载回调函数
 *@param e
 *@param arg arg.file-正在下载的文件,arg.status-正在下载的文件下载状态,1:下载中,2:已暂停,3:已完成4:失败
 */
  (e: Event, arg: Object) => boolean | undefined,

  progressCallback?:
  /** 下载进度回调函数
  *@param e
  *@param arg arg.file-正在下载的文件,arg.totalPercent-下载总进度, arg.thisFilePercent-当前文件下载进度
  */
  (e: Event, arg: Object) => boolean | undefined,

  completedCallback?:
  /** 所有文件下载完成回调函数
   *@param e
   *@param arg files数组；arg[i].filePath可以取到下载后的文件保存地址
  */
  (e: Event, arg: Array<fileInfo>) => boolean | undefined,
}
interface RxmDownload {
  /**
   * 下载文件，支持多文件加载
   * @param arg  下载参数
   */
  downFlies(arg: downFliesArg): void
  /**
  * 重新下载文件，删除已经下载的文件，重新下载
  * @param arg  下载参数
  */
  reload(arg: downFliesArg): void
  /**
   * 打开下载管理器
   * @param arg  显示剧集形式 默认为0全部展开 1为剧集
   */
  openDownloadManager(arg?: number): void


}



