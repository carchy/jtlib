/**
 * RxmRouterMgr插件
 * @see 路由信息插件
 * ```
   //插件引用
   define(['RxmRouterMgr'],function(RxmRouterMgr){
        
   }
 * ```
 * @version  1.4.3
 */
/**
 *
 */
declare type TRxmRouterMgrLoadHomeRoutersArgs = {
    /**
        * 可选,标题,默认为空
        */
    title?: string;
    /**
     * 可选,title颜色,例如：#ffffff,此属性取决于title属性值是否为空,title属性为空时此属性无效
     */
    titleColor?: string;
    /**
     * 可选,是否隐藏导航栏 默认值 false
     */
    hiddenTitleBar?: boolean;
    /**
     * 可选,是否隐藏导航栏返回按钮,此属性取决于hiddenTitleBar属性值,当hiddenTitleBar属性设置为true时此属性无效
     */
    hiddenBackBtn?: boolean;
    /**
     * 可选,标题栏背景,支持图片和颜色值（#0088cc）,此属性取决于hiddenTitleBar属性值,当hiddenTitleBar属性设置为true时此属性无效
     */
    titleBarBg?: string;
    /**
     * 可选,多个菜单项之间用逗号分隔"完成,设置",此属性取决于hiddenTitleBar属性值,当hiddenTitleBar属性设置为true时此属性无效
     */
    menu?: string;
    /**
     * 可选,菜单项文字颜色值,例如：#ffffff,此属性取决于hiddenTitleBar属性值,当hiddenTitleBar属性设置为true时此属性无效
     */
    menuTextColor?: string;
    /**
     * 可选,窗口打开方式,默认值为'_blank'
     */
    target?: string;
    modal?: number;
    mode?: string;
    width?: string;
    back?: boolean;
};
declare type TRxmRouterMgrLoadHomeRouters = {
    router: TPageRouterArgs;
    args: TRxmRouterMgrLoadHomeRoutersArgs;
};
declare type TRxmRouterMgrLoadHome = {
    local?: {
        routers: Array<TRxmRouterMgrLoadHomeRouters>;
    };
    remote?: {
        url?: string;
        succes?: (data: any) => void;
        error?: (data: any) => void;
    };
    widgetArgs?: TPageSlidebarArgs;
    /** create 、append  新建 追加，默认新建*/
    mode?: string;
};
declare class RxmRouterMgr {
    /**
     * 获取跟路由信息
     *
     */
    getAuthRoot(callback: (root: TPageRouterArgs) => void): void;
    /**
     * 获得home所有服务注册的home页面路由信息
     * @param callback 叫回函数
     */
    getAuthHome(callback: (routers: Array<TPageRouterArgs>) => void): void;
    /** 根据名字和id 获取路由值
     * @param {String}  pageIdOrPageId
     * @returns  {rxm.router}
     */
    getRouterValue(pageRouter: string, callback?: (router: TPageRouterArgs) => void): void;
    /**
     * 清除内存中的路由信息
     */
    reset(): void;
    /**
     * 获取所有的子路由，并按照组分类
     * @param {String} pageIdOrPageRouter -路由名称或者id
     * @return  {Object}
     */
    getSonsByGroup(pageIdOrPageRouter: string, callback: (routers: {
        [key: string]: Array<TPageRouterArgs>;
    }) => void): void;
    /**
     * 根据id 路由名称获取所有的子路由
     * @param {String} pageIdOrPageRouter
     * @returns Array<TPageRouterArgs>
     */
    getSons(pageIdOrPageRouter: string, callback: (routers: Array<TPageRouterArgs>) => void): void;
    /**
     * 获取组成员
     * @param {String} groupName
     * @returns Array<TPageRouterArgs>
     */
    getGroupRemembers(groupName: string, callback: (routers: Array<TPageRouterArgs>) => void): void;
    /**
     * 获取父亲路由值
     * @param {String} pageIdOrPageRouter
     * @returns {rxm.router}
     */
    getParent(pageIdOrPageRouter: string, callback: (router: TPageRouterArgs) => void): void;
    /**
     * @param {rxm.router} objPageRouter
     */
    /**
     * 移除指定的路由
     * @param {rxm.router} objPageRouter
     */
    /**
     * 加载router 指定的页面 老的函数，打开home请用 loadHome
     * @param router 路由信息，
     * @param  widgetArgs 窗口信息
     */
    load(router: TPageRouterArgs, widgetArgs: TPageSlidebarArgs): void;
    /**
     * 加载home页面
     * @param args
     *
     */
    loadHome(args?: TRxmRouterMgrLoadHome): void;
}
