"use strict";
class RxmRouterMgr {
    /**
     * 获取跟路由信息
     *
     */
    getAuthRoot(callback) { }
    /**
     * 获得home所有服务注册的home页面路由信息
     * @param callback 叫回函数
     */
    getAuthHome(callback) { }
    /** 根据名字和id 获取路由值
     * @param {String}  pageIdOrPageId
     * @returns  {rxm.router}
     */
    getRouterValue(pageRouter, callback) { }
    /**
     * 清除内存中的路由信息
     */
    reset() { }
    /**
     * 获取所有的子路由，并按照组分类
     * @param {String} pageIdOrPageRouter -路由名称或者id
     * @return  {Object}
     */
    getSonsByGroup(pageIdOrPageRouter, callback) { }
    /**
     * 根据id 路由名称获取所有的子路由
     * @param {String} pageIdOrPageRouter
     * @returns Array<TPageRouterArgs>
     */
    getSons(pageIdOrPageRouter, callback) { }
    /**
     * 获取组成员
     * @param {String} groupName
     * @returns Array<TPageRouterArgs>
     */
    getGroupRemembers(groupName, callback) { }
    /**
     * 获取父亲路由值
     * @param {String} pageIdOrPageRouter
     * @returns {rxm.router}
     */
    getParent(pageIdOrPageRouter, callback) { }
    /**
     * @param {rxm.router} objPageRouter
     */
    //addTempRouter(objPageRouter: TPageRouterArgs): void
    /**
     * 移除指定的路由
     * @param {rxm.router} objPageRouter
     */
    /**
     * 加载router 指定的页面 老的函数，打开home请用 loadHome
     * @param router 路由信息，
     * @param  widgetArgs 窗口信息
     */
    load(router, widgetArgs) { }
    /**
     * 加载home页面
     * @param args
     *
     */
    loadHome(args) { }
}
