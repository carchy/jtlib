"use strict";
/**
 * RxmPage插件
 * @see RxmPage插件,页面工具包插件
 * @see RxmPage插件使用示例
 * ```
   //插件引用
   define(['RxmPageBase'],function(rxmpage){
      //函数调用,关闭当前页面窗口
      rxmpage.closePage(args);
   }
 * ```
 * @version  1.4.3
 */
class RxmPage {
    /**
     * 隐藏标题栏
     * @param isShow  true 隐藏;false 显示,默认为false显示
     */
    hiddenTitleBar(isShow) { }
    /**
     * 隐藏 标题栏上的回退按钮
     * @param isShow true 隐藏;false 显示,默认为false显示
     */
    hiddenBackBtn(isShow) { }
    /**
     * 注销
     * @param finishPage 1:清除本地信息,跳转至gloabl.xml中配置的first页 ;0：清除本地信息,不结束页面,不跳转,调用cbLogout回调方法
     */
    logout(finishPage, args) { }
    /**
     * ios 禁止页面回弹效果
     * @param scroll 1表示禁用，0表示不禁用
     * @param bound  1表示禁用，0表示不禁用
     */
    forbidWebViewAttr(scroll, bound) { }
    /** 关闭当前页面窗口
     * @param args  窗口关闭向父窗口返回的数据
     */
    closePage(args) { }
    /**
     * 提示对话框
     * @param param  提示信息
     * @param cb 可选
     * @param modal 可选
     */
    alert(args, cb, modal) { }
    /**
     * 确认对话框,整合回调函数成一个,利用回传参数判断是否成功
     * @param  args 全部参数对象
     * @param  okCallback  可选 args的第二个参数
     * @param  cancelCallback  可选 args的第三个参数
     * @param  modal 可选 args 第四个参数
     */
    confirm(args, okCallback, cancelCallback, modal) { }
    /**
     * 打开 Dialog
     * @param config 全部参数对象
     */
    contentDialog(config) { }
    ;
    /**
     * 移动端打开新窗口，桌面端打开侧边栏
     * @param router 页面路由参数对象
     * @param args slidebar参数对象
     */
    slidebar(router, args) { }
    ;
    /**
     * 打开form页面
     * @param args 打开form页面参数
     */
    openForm(args) { }
    /**
     * 显示loading图标
     * @param config loading图标参数对象
     * @returns {rxm.page.loadingReturn}
     */
    loading(config) { return {}; }
    /**
     * 显示可提示用户输入的对话框
     * @param config 显示可提示用户输入的对话框参数对象
     */
    prompt(config) { }
    /**
     * 显示提示语
     * @param message 必填 提示信息
     * @param position 可选 显示位置"top","bottom","center",默认值center
     * @param duration 可选 提示语显示时间 "short","long",默认值short
     */
    toast(message, position, duration) { }
    /**
     * 删除菜单项
     */
    cleanMenu() { }
    /**
     * 设置标题栏左侧按钮（只能设置一个左侧按钮）
     * @param args
     */
    showLeftBtn(args) { }
    /**
     * 设置页面标题及标题颜色
     * @param title 必填 页面标题
     * @param textColor 可选 页面标题颜色值
     */
    setTitle(title, textColor) { }
    /**
     * 设置页面标题栏背景颜色
     * @param bgColor 必填 页面标题栏背景颜色值
     */
    setTitleBarBg(bgColor) { }
    /**
     * 页面激活状态绑定函数
     * @param args 页面激活参数对象
     */
    bindPageActived(args) { }
    /**
     * 获取应用信息
     * @param args 获取应用信息参数对象
     */
    getAppInfo(args) { }
    /**
     * 组织人员选择
     * @param  cfg 组织人员选择参数对象
     */
    OrgSelect(cfg) { }
    // /**
    //  * 设置首页 TabBar 选中项 homeType=1或2时有效，其他页面调用无效
    //  * @param pageId 要选中的Tab页的pageId
    //  */
    // chgSelectedTab(pageId:string):void{}
    // /**
    //  * 获取首页 TabBar 选中项的pageId，homeType=1或2时有效，其他页面调用无效。 
    //  * @param args 必选
    //  */
    // getSelectedTab(args:TPageSelectedTabArgs):void{}
    /**
     * 高级搜索
     * @param  cfg  高级搜索参数对象
     * @param  router  可选 页面路由参数对象
     */
    rxmSearch(cfg, router) { }
    /**
     * 获取deviceId（Force）
     * @param  cfg 获取deviceId参数对象
     */
    getForceSysDeviceID(cfg) { }
    /**
     * 启动第三方app
     * @param  cfg 启动第三方app参数对象
     */
    openApp(cfg) { }
    /**
     * 向其他窗口发送通知
     * @param  pageIds 接收notify的窗口id,多个以英文逗号分隔
     * @param  notifyObj 发送的消息
     */
    postPageNotify(pageIds, notifyObj) { }
    /**
     * 绑定函数，接受来自其他窗口页面的消息
     * @param args 绑定函数接受来自其他窗口页面消息参数对象
     */
    bindPageNotify(args) { }
    /**
     * 绑定bodyready函数,触发回调
     * @param  args  绑定bodyready参数对象
     */
    bindPageReady(args) { }
}
