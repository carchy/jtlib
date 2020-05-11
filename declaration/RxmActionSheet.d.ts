/**
 * RxmActionSheet插件
 * @see RxmActionSheet插件,菜单插件
 * @see RxmActionSheet插件使用示例
 * ```
   //插件引用
   define(['RxmActionSheet'],function(RxmActionSheet){
      
   }
 * ```
 * @version  1.4.3
 */
/**
 * 列表型菜单参数
 */
declare type listSheetArg = {
    callback: 
    /** 回调函数
    *@param e
    *@param data 点击列表的序号 点击取消按钮则data＝－1
    */
    (e: Event, data: String) => boolean | undefined;
    /**用户数据*/
    data?: object;
    /**参数*/
    json: {
        /**取消按钮样式 title:取消按钮上文字 color：取消按钮文字颜色*/
        cancel: object;
        /**列表选项 title:文字内容 color：文字颜色*/
        item: Array<object>;
        /**是否可以点击其他位置消失 0-可以 1-不可以*/
        canceledOnTouchOutside: Number;
    };
    /**为空时不显示标题栏*/
    title?: String;
};
/**
 * 表格型菜单参数
 */
declare type gridSheetArg = {
    callback: 
    /** 回调函数
    *@param e
    *@param data 点击列表的序号 点击取消按钮则data＝－1
    */
    (e: Event, data: String) => boolean | undefined;
    /**用户数据*/
    data?: object;
    /**参数*/
    json: {
        /**取消按钮样式 title:取消按钮上文字 color：取消按钮文字颜色*/
        cancel: object;
        /**列表选项列表选项 title:文字内容 color：文字颜色 img：文字左边图片（可空）*/
        item: Array<object>;
        /**是否可以点击其他位置消失 0-可以 1-不可以*/
        canceledOnTouchOutside: Number;
    };
    /**为空时不显示标题栏*/
    title?: String;
};
declare class RxmActionSheet {
    /**
     * 打开列表型菜单
     * @param arg  列表型菜单参数
     */
    openListSheet(arg: listSheetArg): void;
    /**
     * 打开表格型菜单
     * @param arg 表格型菜单参数
     */
    openGridSheet(arg: gridSheetArg): void;
}
