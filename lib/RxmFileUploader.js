"use strict";
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
