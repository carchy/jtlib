/**  
 * tab标签插件
 * @see 标签页切换显示功能插件
 * @see RxmTab插件使用示例
 * ```
   //插件引用
   define(['RxmTab'],function(rxmtab){
      
   }
 * ```
 * @version  1.4.3 
 */


/**
 * 新增标签页参数对象
 */
type addTabArgs = {
    /**
     * 标签id
     */
    tabId:string, 
    /**
     * 标签切换签内容 html代码或jquery dom对象
     */
    tabItem:string | Object 
    /**
     * 标签切换签对应的内容栏内容 html代码或jquery dom对象
     */
    tabPanel:string | Object
}

/**
 * 绑定tab事件参数对象
 */
type bindEventArgs = {
    /**
     * 绑定事件触发的回叫函数
     */
    callback:Function 
}

interface RxmMessage{

    /**
     * 新增标签项函数 
     * @param arg undefined--新增默认样式的标签  addTabArgs--新增定制化标签
     */
    addTabItem(arg: undefined | addTabArgs):void

    /**
     * 删除标签项函数
     * @param arg tab页签id,此参数可为字符串、数组、undefined  字符串--删除指定id的单个页签;字符串数组--删除多个页签;不传参数--删除所有页签
     */
    deleteTabItem(arg: string | Array<string> | undefined):void

    /**
     * 打开标签项函数,每次打开一个
     * @param tabId 标签id
     */
    openTabItem(tabId: string):void

    /**
     * 标签页激活开始消息绑定
     * @param args 绑定tab事件参数对象
     */
    bindRxmTabShow(args: bindEventArgs):void

    /**
     * 标签页激活结束消息绑定
     * @param args 绑定tab事件参数对象
     */
    bindRxmTabShown(args: bindEventArgs):void

    /**
     * 标签页隐藏开始消息绑定
     * @param args 绑定tab事件参数对象
     */
    bindRxmTabHide(args: bindEventArgs):void

    /**
     * 标签页隐藏结束消息绑定
     * @param args 绑定tab事件参数对象
     */
    bindRxmTabHidden(args: bindEventArgs):void

    /**
     * 标签页添加开始消息绑定
     * @param args 绑定tab事件参数对象
     */
    bindRxmTabAdd(args: bindEventArgs):void

    /**
     * 标签页添加结束消息绑定
     * @param args 绑定tab事件参数对象
     */
    bindRxmTabAdded(args: bindEventArgs):void

    /**
     * 标签页删除开始消息绑定
     * @param args 绑定tab事件参数对象
     */
    bindRxmTabClose(args: bindEventArgs):void

    /**
     * 标签页删除结束消息绑定
     * @param args 绑定tab事件参数对象
     */
    bindRxmTabClosed(args: bindEventArgs):void
   
}
