/**
 * RxmFileUploader插件
 * @see RxmFileUploader插件,下载插件，适用于移动端下载文件
 * @see RxmFileUploader插件使用示例
 * ```
   //插件引用
   define(['RxmFileUploader'],function(RxmFileUploader){
      var cfg={

            // document.body
            paste: document.body,
            //配置上传文件的类型   默认所有类型
            accept: {
                //android安装程序为例
                title: 'android安装程序',
                extensions: 'apk,jpg,docx'
                mimeTypes: 'application/vnd.android.package-archive'
            },
            // 是否压缩，默认FALSE
            compress: false,
            //默认true
            disableGlobalDnd: true,
            //是否分片
            chunked: true,
            // 分片大小
            chunkSize: 1024 * 1024,
            //分片重传次数
            chunkRetry: 2,
            // 文件数量限制
            fileNumLimit: 1,
            // 单文件大小限制
            fileSingleSizeLimit: 100 * 1024 * 1024,
            // 服务器地址 RxmFileUploader.urlUpload()
            server: RxmFileUploader.urlUpload(),
            // 是否自动上传
            auto: false
        }
    //上传对象实例化
    var fileUploader=new RxmFileUploader(cfg)
   }
 * ```
 * @version  1.4.3
 */
/**
 * 上传文件信息
 */
declare type uploaderFileInfo = {
    /** 文件id*/
    id: String;
    /** 值为""或"new",""代表已入库*/
    opType?: String;
    /** 文件名称 */
    fileName?: String;
    /** 文件扩展名*/
    fileExt?: String;
    /** 文件大小*/
    fileSize?: String;
    /** 文件名称（带后缀名）*/
    fileRemarks?: String;
    /** 文件最后修改时间*/
    lastModifiedDate?: String;
    /** 文件的minetype类型*/
    httpType?: String;
};
/**
 * 移动端文件信息
 */
declare type rxmFileInfo = {
    /** 文件id*/
    id: String;
    /** 文件名称，文件重命名时使用 */
    realName?: String;
    /** 文件路径*/
    filePath: String;
};
/**
 * 文件选择信息
 */
declare type openFileDlg = {
    /**上传文件来源
    * startVideo——打开录制视频
    * startAudio——打开录制音频
    * startPhoto——拍照
    * video——通过客户端录制的视频文件目录
    * audio——通过客户端录制的音频文件目录
    * camera——通过客户端拍摄的照片目录
    * systemImage-打开系统相册选择图片
    * systemVideo-打开系统相册选择视频
    * ends——只显示指定后缀名的文件，多个后缀逗号分隔 ，*为显示全部文件。注：该参数设置后，只能显示ci://APP可添加删除修改的目录。*/
    filePath: String;
    /** 替换名称（当想修改文件路径中的名字时使用）*/
    realName?: String;
    /** 是否多选，设置是否多文件，选择文件框时有效*/
    multiOption: boolean;
};
/**
 * 文件类型信息
 */
declare type fileExtArg = {
    /**String*/
    title?: String;
    /**文件后缀 例如apk,jpg,docx*/
    extensions?: String;
    /**文件mimeTypes*/
    mimeTypes?: String;
};
interface RxmFileUploader {
    /**
     * 向上传队列中添加文件
     * @param fileOrFiles 文件信息或者文件信息数组
     * @param who
     * @param ipos
     */
    addFile(fileOrFiles: uploaderFileInfo | Array<uploaderFileInfo>, who?: String, ipos?: Number): void;
    /**
    * 手机中已有文件上传，已知文件路径
    * @param fileOrFiles  文件信息或者文件信息数组
    */
    addOrmFile(fileOrFiles: rxmFileInfo | Array<rxmFileInfo>): void;
    /**
     * 获取上传文件数量
     * @return  文件数量
     */
    getFileNum(): Number;
    /**
     * 删除上传的文件
     * @param fileOrFiles 文件信息
     */
    delFile(fileOrFiles: uploaderFileInfo | Array<uploaderFileInfo>): void;
    /**
     * 获取变化的文件
     * @return  文件信息
     */
    getChangedFiles(): uploaderFileInfo | Array<uploaderFileInfo>;
    /**
     * 打开文件选择对话框
     * @param arg 文件选择信息
     */
    OpenFileDlg(arg: openFileDlg): void;
    /**
     * 指定接受哪些类型的文件
     * @param fileExt 文件类型信息
     */
    accept(fileExt: fileExtArg): void;
    /**
     * 能不能继续添加文件
     * @returns
     */
    enableAdd(): Boolean;
    /**
     * 能不能修改文件
     * @returns
     */
    enableModify(): Boolean;
    /**
     * 能不能删除文件
     * @returns
     */
    enableDel(): Boolean;
    /**
     * 开始上传文件
     * @param fileOrFileId 文件信息或者文件id,undefined为全部上传
     */
    beginUpload(fileOrFileId: uploaderFileInfo | String | undefined): void;
    /**
     * 添加单个文件事件
     * @param file 文件信息
     */
    bindFileAdded(file: uploaderFileInfo): void;
    /**
       * 删除文件事件
       * @param file 删除的文件信息
       */
    bindFileDeleted(file: uploaderFileInfo): void;
    /**
       * 单文件上传成功事件
       * @param file 上传成功的文件信息
       */
    bindFileUpSuccess(file: uploaderFileInfo): void;
    /**
       * 单个文件上传开始事件
       * @param file 上传开始的文件信息
       */
    bindFileUpStart(file: uploaderFileInfo): void;
    /**
       * 文件全部上传结束事件
       * @param file 文件信息
       */
    bindFileUpAllCompleted(file: uploaderFileInfo | Array<uploaderFileInfo>): void;
    /**
       * 文件上传进度事件
       * @param file 文件信息
       * @param percentage 进度百分比
       */
    bindFileUpProgress(file: uploaderFileInfo, percentage: Number): void;
}
