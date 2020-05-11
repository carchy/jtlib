/**  
 * 消息推送插件
 * @see 极光消息推送
 * @see RxmMessage插件使用示例
 * ```
   //插件引用
   define(['RxmMessage'],function(rxmmessage){
        //函数调用,停止推送
        rxmmessage,stopPush()
   }
 * ```
 * @version  1.4.3 
 */

/**
 * 别名参数对象
 */
type aliasArgs = {
    /**
     * 设置的别名
     */
    alias:string 
}

/**
 * 添加本地通知参数对象
 */
type LocalMsgNotificationArgs = {
    /**
     * 设置本地通知样式(仅Android有效),默认值为0, 
     */
    builderId:number, 
    /**
     * 本地通知的title,默认值为"这是title", 
     */
    title:string, 
    /**
     * 设置本地通知的content,默认值为"这是内容", 
     */
    content:string, 
    /**
     * 设置本地通知的ID,默认值为3, 
     */
    notificationId:number, 
    /**
     * 设置本地通知延迟触发时间,毫秒为单位,默认值为10000, 
     */
    broadCastTime:number,
    /**
     * 额外的数据信息extras为json字符串
     */
    extras?:{[key:string]:string}
}

interface RxmMessage{

    /**
     * 页面切到后台时保持推送监听
     * @param flag 必选 1-保持 其他- 停止
     */
     keepPushOnPause(flag:number):void

    /**
     * 停止推送服务
     */
     stopPush():void

    /**
     * 恢复推送服务
     */
    resumePush():void

    /**
     * 设置别名
     * @param  alias 别名对象
     * @param  callback 回叫函数
     */
    setAlias(alias:aliasArgs,callback:Function):void

    /**
     * 设置标签
     * @param  tags 标签数组参数
     * ```
        //参数示例
        var tags=new Array("tag1","tag2","tag3")
     * ```
     * @param  callback 回叫函数
     */
    setTags(tags:Array<string>,callback:Function):void

    /**
     * 同时设置别名与标签 
     * @param  alias 别名对象
     * @param  tags 标签数组参数
     * @param  callback 回叫函数
     */
    setAliasAndTags(alias:aliasArgs,tags:Array<string>,callback:Function):void

    /**
     * 取得应用程序对应的 RegistrationID
     * @param callback 回叫函数
     */
    getRegistrationID(callback:
    /**
     * @param data RegistrationID数据信息
     */
    (data:Object)=>boolean|undefined):void

    /**
     * 清除所有通知 for android
     * @param callback 回叫函数
     */
    clearAllNotifications(callback:Function):void

    /**
     * 根据Id清除某条通知 for android
     * @param notificationId notificationId
     */
    clearNotificationById(notificationId:string):void

    /**
     * 连接状态发生变化触发事件 
     * @param callback 触发事件回叫函数
     */
    onReceiveConnectionChange(callback:Function):void

    /**
     * 获取连接状态
     * @param callback 回叫函数
     */
    getConnectionState(callback:
    /**
     * @param data 连接状态数据信息
     */
    (data:Object)=>boolean|undefined):void

    /**
     * 添加一个本地通知 
     * @param args 添加本地通知参数对象 
     */
    addLocalNotification(args:LocalMsgNotificationArgs):void

    /**
     * 移除一个本地通知
     * @param notificationId id
     */
    removeLocalNotification(notificationId:string):void

    /**
     * 移除所有的通知
     */
    clearLocalNotifications():void

    /**
     * 设置badge值
     * @param badgeNumber 要设置的badge值,非负整数
     */
    setBadgeNumber(badgeNumber:number):void

    /**
     * 禁止前台本地通知提示框 
     * 和Android系统不同，在iOS系统中，当APP处于前台时，收到本地通知后，系统不会在屏幕顶部弹出气泡显示通知内容。 于是极光SDK自己设置了一个本地通知提示框，在APP在前台收到本地通知后弹出，显示通知内容。 通过调用此接口，可以禁止或者重新启动此本地通知提示框
     * @param param 参数 1-禁止 其他-允许
     */
    disableLocalNotificationAlertView(param:number):void
}
