/**
 * Tool工具类插件
 * @see 封装了常用的公用函数
 * @see RxmAppTool插件使用示例
 * ```
   //插件引用
   define(['RxmAppTool'],function(rxmapptool){
        //函数调用,生成32位uuid
        rxmapptool.uuid()
   }
 * ```
 * @version  1.4.3
 */
/** */
export default class RxmAppTool {
    /**
     * 序列化表单元素为JSON对象（兼容工作流项目组）
     * @param form  Form表单id或表单jquery DOM对象
     */
    serialize(form: string | Object): void;
    /**
     * 设置表单值（兼容工作流项目组）
     * @param form     Form表单id或表单jquery DOM对象
     * @param data     json对象，多选时为数组
     */
    deserialize(form: string | Object, data: Array<Object>): void;
    /**
     * 产生32位uuid
     * @returns 32位uuid字符串
     */
    uuid(): string;
    /**
     * 产生随机数字符串
     * @param  length  结果字符串的长度
     * @returns 相应长度的结果字符串
     */
    unid(length?: number): string;
    /**app工具对象
     * @typedef  {RxmAppTool} rxm.AppTool */
    /** 得到父窗口传入的用户数据
     * @return {Object}
     */
    getWidgetInitData(): Object;
    /**
     * 是弹出页面
     * @returns  {Boolean}
     */
    isJump(): Boolean;
    /**
     * 是否是 file://协议打开（本地加载）
     * @returns  {Boolean}
     */
    isLocalLoad(): Boolean;
    /**
     * 是否是app打开的
     * @returns  {Boolean}
     */
    isAppOpen(): Boolean;
    /**
     * 判断是否是桌面系统打开
     * @returns  {Boolean}
     */
    isDesktopOpen(): Boolean;
    /** 判断是否移动端打开
     * @returns  {Boolean}
     */
    isMobileOpen(): Boolean;
    /**
     * 获取host   window.location.host +getServer()
     * @returns  {String}
     */
    getHostUrl(): String;
    /**
     * 判断是不是android
     * @returns  {Boolean}
     */
    isAndriod(): Boolean;
    /**
     * 判断是不是IOS
     * @param {String} flatform
     * @returns {Boolean}
     */
    isIOS(flatform: string): Boolean;
    /**
     * 获取用户id
     * @return {String}
     */
    getUserID(): String;
    /**
     * 获取设置数据
     * @return {String}
     */
    getSettingData(): Object;
    thisObj(id: string | HTMLElement, value?: any): any;
}
