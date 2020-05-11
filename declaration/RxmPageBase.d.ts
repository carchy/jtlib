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
/**
 * 提示对话框参数对象
 */
declare type TPageAlertArgs = {
    /**
     * 提示标题,默认值为"提示"
     */
    title?: string;
    /**
     * 提示内容,默认值为空
     */
    content: string;
    /**
     * 提示按钮文字,默认值为"确定"
     */
    btnTitle?: string;
    /**
     * 回调函数
     */
    callback?: Function;
    modal?: number;
};
/**
 * 确认对话框参数对象
 */
declare type TPageConfirmArgs = {
    /**
     * 确定标题,默认值为"提示"
     */
    title: string;
    /**
     * 确定内容,默认值为""
     */
    content: string;
    /**
     * 确定按钮文字,默认值为"确定"
     */
    okBT: string;
    /**
     * 取消按钮标题,默认值为"取消"
     */
    cancelBT: string;
    /**
     * 确定按钮回调函数
     */
    okCb: Function;
    /**
     * 取消按钮回调函数
     */
    cancelCb: Function;
    modal?: number;
};
/**
 * dialog参数对象
 */
declare type TPageDialogArgs = {
    /**
     * dialog id,唯一标识,默认值为"advanceSearchDialog"
     */
    id: string;
    /**
     * dialog高度值,默认值为"310px"
     */
    height: string;
    /**
     * dialog宽度值,默认值为"340px"
     */
    width: string;
    /**
    * dialog标题,默认值为"高级搜索"
    */
    title: string;
    /**
     * dialog主体内容,默认为""
     */
    body: string;
    /**
     * dialog配置按钮,默认值为"[{name: "搜索", callback: ƒ}]"
     */
    buttons: Array<object>;
    modal?: number;
};
declare type TPageOpenFormArgs = {
    router: TPageRouterArgs;
    args: TPageSlidebarArgs;
    form: TPageFormArgs;
};
declare type TPageFormArgs = {
    /**
     * 表单状态，"add"或"edit"或"view"
     */
    optype: string;
    initData?: {
        [key: string]: any;
    };
    initLoad?: {
        url: String;
        type?: String;
        data?: {
            [key: string]: any;
        };
    };
};
declare type TFormReloadArgs = {
    /**form初始化数据 */
    form?: TPageFormArgs;
    ajaxOkFormat?: (params: {
        [key: string]: any;
    }) => void;
    formInitOk?: (params: {
        [key: string]: any;
    }) => void;
    /**数据加载成功  作为 ajax sucess */
    reloadSuccess?: (params: {
        [key: string]: any;
    }) => void;
    /**数据加载失败  作为 ajax error*/
    reloadError?: (error: any) => void;
};
/**
 * slidebar参数对象
 */
declare type TPageSlidebarArgs = {
    /**
     * 可选,打开新窗口时传入参数
     */
    data?: Object;
    /**
     * 可选，打开form页面，传入初始化值
     */
    form?: TPageFormArgs;
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
     * 可选,窗口关闭叫回函数 形如 function(arg)
     */
    afterClose?: Function;
    /**
     * 可选,窗口打开方式,默认值为'_blank'
     */
    target?: string;
    modal?: number;
    mode?: string;
    width?: string;
    back?: boolean;
};
/**
 * router参数对象
 */
declare type TPageRouterArgs = {
    /**
     * 必选,页面id,唯一标识
     */
    pageId?: string;
    /**
    * 必选,路由id,唯一标识,可与pageId保持一致
    */
    pageRouter?: string;
    /**
    * 必选,页面类型,10为全页面
    */
    pageType?: string;
    /**
     * 必选,页面对应html文件地址
     */
    pageCtrl?: string;
    /**
     * 必选,页面html文件对应的入口js文件地址
     */
    pageCtrlUrl?: string;
    /**
     * 可选,页面名称
     */
    pageName?: string;
    /**
     * 可选,页面从属类别
     */
    pagePid?: string;
    /**
     * 可选,页面描述
     */
    pageDesc?: string;
    /**
     * 可选,页面排列顺序
     */
    pageOrder?: string;
    /**
     * 可选,页面地址
     */
    pageUrl: string;
    /**
    * 可选,页面打开方式,默认值为'_blank'
    */
    pageOpen?: string;
    pageIcon?: string;
    hash?: string;
};
/**
 * loading参数对象
 */
declare type TPageLoadingArgs = {
    /**
     * 要显示在某个元素上的元素Id或者dom对象[默认document.body]
     */
    id: string | Object;
    /**
     * 可选 是否显示遮罩层[默认true]
     */
    modal?: true;
    /**
     * 可选 是否可以滑动[默认false]
     */
    scroll?: boolean;
    /**
     * 可选 字体大小
     */
    fontSize?: string;
    /**
     * 可选 要显示的文本内容[默认无]
     */
    text?: string;
    /**
     * 可选 宽度
     */
    width?: string;
    /**
     * 可选 高度
     */
    height?: string;
};
/**
 * 显示可提示用户输入的对话框参数对象
 */
declare type TPagePromptArgs = {
    /**
     * 可选 要在 window 上弹出的对话框中显示的纯文本（而非 HTML 文本）
     */
    message?: string;
    /**
     * 可选 默认的输入文本
     */
    text?: string;
    /**
     * 可选 默认的输入文本placeholder
     */
    placeholder?: string;
    /**
     * 可选 弹出框标题，默认值“提示”
     */
    title?: string;
    /**
     * 可选 弹出框确认按钮，默认值“确定”
     */
    btnok?: string;
    /**
     * 可选 弹出框取消按钮，默认值“取消”
     */
    btncancel?: string;
};
/**
 * menu参数对象
 */
declare type TPageMenuArgs = {
    /**
     * 菜单项按钮绑定事件
     */
    callback: Function;
    /**
     * 菜单名称,默认为空
     */
    name: string;
};
/**
 * 显示左侧按钮参数对象
 */
declare type TPageShowLeftBtnArgs = {
    /**
     * 必选,String,文字或图片（citp://www/img/a.png）
     */
    text: string;
    /**
     * 可选,String,文字颜色,当 text 为文字时有效，默认:FFFFFF
     */
    textColor?: string;
    /**
     * 点击左侧按钮后执行的方法
     */
    callback: Function;
    data?: any;
};
/**
 * 绑定页面激活参数对象
 */
declare type TPageBindPageActivedArgs = {
    /**
     * 页面恢复后的回调方法
     */
    callback: Function;
    /**
     * 绑定次数,Boolean true,该回调方法只会绑定一次;false,回调方法绑定多次
     */
    one: boolean;
    msgType: String;
};
/**
 * 应用信息数据对象
 */
declare type TPageAppDataArgs = {
    /**
     * app 检查更新客户端版本
     */
    appVersion: string;
    /**
     * app版本名称
     */
    appVersionName: string;
    /**
     * app版本Build号
     */
    appBuildCode: string;
    /**
     * 模板版本号
     */
    h5Version: string;
    /** app
     * 名称
     */
    appName: string;
    /**
     * app 包名，唯一 ID
     */
    appBundleId: string;
    /**
     * app 渠道唯一码
     */
    appChannel: string;
};
/**
 * 获取应用信息参数对象
 */
declare type TPageAppInfoArgs = {
    callback: 
    /**
     * 回调函数 返回设备信息
     * @param  e Event对象
     * @param  data  应用信息数据对象
     */
    (e?: Event, data?: TPageAppDataArgs) => boolean | undefined;
};
/**
 * 组织人员选择参数对象
 */
declare type TPageOrgSelectArgs = {
    /**
    * 可选,ture为多选,false为单选,默认true
    */
    multi?: boolean;
    treeData?: object;
    /**
     * 可选,无数据时是否提交
     */
    noDataCanSubmit?: boolean;
    /**
    * 标题栏背景色,可选,支持颜色值,默认值为"#00a0f8"
    */
    titleBarBgColor?: string;
    /**
    * 标题栏字体颜色,可选,支持颜色值,默认值为"#ffffff"
    */
    titleBarFontCololr?: string;
    /**
    * 选中字体颜色,可选,支持颜色值,默认值为"#00a0f8"
    */
    selectedFontColor?: string;
    /**
    * 保存按钮背景色,可选,支持颜色值,默认值为"#00a0f8"
    */
    saveBtnBgColor?: string;
    /**
    * 保存按钮字体色,可选,支持颜色值,默认值为"#ffffff"
    */
    saveBtnFontColor?: string;
    /**
    * 角色顺序,可选,dept：部门，user：部门人员，role：角色，roleMember：角色人员，gw：岗位;可传入少于5个参数;默认值为:["dept","user","role","roleMember","gw"]
    */
    tagType?: Array<string> | string;
    /**
    * 下方图片路径,可选,绝对路径,空字符串时,不显示图片,默认值为"www/rxm/widget/org/views/selected-img.png"
    */
    imgSrc?: string;
    /**
    * 可选,设置要隐藏的节点
    */
    hideNode?: Object;
    /**
    * 属性不生效,传空时进行查询服务构造树
    */
    rootNode?: Object;
    /**
    * 传入下个页面的值,对象类型,可选,默认为空,只传ID即可
    */
    data?: Object;
    /**
    * 回调函数,提交后进行回调,可选,传回数据放在data中,dept：部门，user：部门人员，role：角色，roleMember：角色人员，gw：岗位
    */
    callback?: Function;
};
/**
 * 获取选择标签页面参数对象
 */
declare type TPageSelectedTabArgs = {
    callback: 
    /**
     * 回调函数 返回pageId
     * @param e Event对象
     * @param data pageId,页面唯一标识
     */
    (e?: Event, data?: String) => boolean | undefined;
};
/**
 * 获取选择标签页面参数对象
 */
declare type TPageSearchCfgArgs = {
    /**
     * 自定义控制器 可选,默认值为空
     */
    myPath: string;
    /**
     * 搜索框id 可选,默认值为空
     */
    id: string;
    /**
     * 搜索grid 必选
     */
    searchGrid: {
        /**
         * grid id 可选,默认值为空
         */
        gridId?: string;
        /**
         * gird url 必选,默认值为空
         */
        searchUrl: string;
        /**
         * gird显示数据 必选
         */
        gridData: [{
            /**
             * 列名称 必选,默认值为空
             */
            name: string;
            /**
             * 值（字段名） 必选,默认值为空
             */
            field: string;
        }];
        /**
         * 搜索字段 必选,默认值为空
         */
        searchField: string;
    };
    /**
     * 热词grid 可选
     */
    hotGrid?: {
        /**
         * 热词grid id 可选,默认值为空
         */
        hotId: string;
        /**
         * 热词url 必选,默认值为空
         */
        hotUrl: string;
        /**
         * 热词显示数据 必选
         */
        hotData: [{
            /**
             * 列名称 必选,默认值为空
             */
            name: string;
            /**
             * 值（字段名) 必选,默认值为空
             */
            field: string;
        }];
        /**
         * 热词搜索字段 必选,默认值为空
         */
        hotSearchField: string;
    };
    /**
     * 单选多选,默认值为true
     */
    muti: boolean;
    /**
     * 可选,标题,默认为空
     */
    title?: string;
    /**
     * 可选,title颜色,例如：#ffffff,此属性取决于title属性值是否为空,title属性为空时此属性无效
     */
    titleColor?: string;
    /**
     * 可选,是否隐藏导航栏  默认值 false
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
     * 可选,窗口关闭叫回函数 形如 function(arg)
     */
    afterClose?: Function;
};
/**
 * 获取获取deviceId参数对象
 */
declare type TPageGetForceIdArgs = {
    /**
     * 是否立刻激发回调方法,false时只绑定监听方法
     */
    isTrigger: boolean;
    callback: 
    /**
     * 回调方法
     * @param  e  Event对象
     * @param  data deviceId
     */
    (e?: Event, data?: string) => boolean | undefined;
};
/**
 * 打开app参数对象
 */
declare type TPageOpenAppArgs = {
    /**
     * 必选 String  适用ios 第三方应用的URLScheme，Scheme 格式参考：URL_SCHEME 规范
     */
    appInforIos: string;
    /**
     * 必选 String 适用Android 启动方式，0表示通过包名和类名启动，1表示通过Action启动。
     */
    startMode: string;
    /**
     * 必选 String 适用Android 包名*
     */
    mainInfo: string;
    /**
     * 可选 String  适用ios 打开应用失败时，otherappurl 为空 弹出提示语，otherappurl 不为空 弹出确认对话框
     */
    otherappurl?: string;
    /**
     * 可选 String  适用ios 确认对话框点确认时，android调浏览器下载安装，IOS跳转appstore下载安装或企业账号安装，IOS上架AppStore时有审核风险，慎用！！
     */
    routeFailToast?: string;
    /**
     * 可选 String 适用Android 类名，为空时启动应用入口类
     */
    addInfo?: string;
    /**
     * 可选 String 适用Android 附加参数，键值对，{key:value}格式多个用英文”,”隔开，如：”{‘key1’:’value1’},{‘key2’:’value1’}”。
     */
    optInfo?: string;
    routeInstallUrl?: String;
};
/**
 * 向其他窗口发送通知参数对象
 */
declare type TPageNotifyObjArgs = {
    /**
    * 必选 String  自定义消息名称
    */
    notifyType: string;
};
/**
 * 绑定函数接受来自其他窗口页面消息参数对象
 */
declare type TPageBindPageNotifyArgs = {
    /**
     * 必选 String  自定义消息名称
     */
    notifyType: string;
    /**
     * 可选 回叫函数
     */
    callback?: 
    /**
     * @param e Event对象
     * @param data   postPageNotify传递的数据
     */
    (e?: Event, data?: TPageNotifyObjArgs) => boolean | undefined;
    /**
     * 可选 Boolean true，该回调方法只会绑定一次；false，回调方法绑定多次,默认为false
     */
    one?: boolean;
};
/**
 * 绑定函数接受来自其他窗口页面消息参数对象
 */
declare type TPageBindBodyReadyArgs = {
    callback: 
    /**
     * @param  e  Event对象
     * @param  data 其他数据
     */
    (e?: Event, data?: Object) => boolean | undefined;
    /**
     * 可选 Boolean true，该回调方法只会绑定一次；false，回调方法绑定多次,默认为false
     */
    one?: boolean;
};
declare type TPageToast = {
    message: string;
    position: string;
    duration: string;
};
declare class RxmPage {
    /**
     * 隐藏标题栏
     * @param isShow  true 隐藏;false 显示,默认为false显示
     */
    hiddenTitleBar(isShow: boolean): void;
    /**
     * 隐藏 标题栏上的回退按钮
     * @param isShow true 隐藏;false 显示,默认为false显示
     */
    hiddenBackBtn(isShow: boolean): void;
    /**
     * 注销
     * @param finishPage 1:清除本地信息,跳转至gloabl.xml中配置的first页 ;0：清除本地信息,不结束页面,不跳转,调用cbLogout回调方法
     */
    logout(finishPage: number, args?: any): void;
    /**
     * ios 禁止页面回弹效果
     * @param scroll 1表示禁用，0表示不禁用
     * @param bound  1表示禁用，0表示不禁用
     */
    forbidWebViewAttr(scroll: number, bound: number): void;
    /** 关闭当前页面窗口
     * @param args  窗口关闭向父窗口返回的数据
     */
    closePage(args?: Object): void;
    /**
     * 提示对话框
     * @param param  提示信息
     * @param cb 可选
     * @param modal 可选
     */
    alert(args: TPageAlertArgs | string, cb?: Function, modal?: any): void;
    /**
     * 确认对话框,整合回调函数成一个,利用回传参数判断是否成功
     * @param  args 全部参数对象
     * @param  okCallback  可选 args的第二个参数
     * @param  cancelCallback  可选 args的第三个参数
     * @param  modal 可选 args 第四个参数
     */
    confirm(args: TPageConfirmArgs, okCallback?: Function, cancelCallback?: Function, modal?: any): void;
    /**
     * 打开 Dialog
     * @param config 全部参数对象
     */
    contentDialog(config: TPageDialogArgs): void;
    /**
     * 移动端打开新窗口，桌面端打开侧边栏
     * @param router 页面路由参数对象
     * @param args slidebar参数对象
     */
    slidebar(router: TPageRouterArgs, args?: TPageSlidebarArgs): void;
    /**
     * 打开form页面
     * @param args 打开form页面参数
     */
    openForm(args: TPageOpenFormArgs): void;
    /**
     * 显示loading图标
     * @param config loading图标参数对象
     * @returns {rxm.page.loadingReturn}
     */
    loading(config: TPageLoadingArgs): Object;
    /**
     * 显示可提示用户输入的对话框
     * @param config 显示可提示用户输入的对话框参数对象
     */
    prompt(config: TPagePromptArgs): void;
    /**
     * 显示提示语
     * @param message 必填 提示信息
     * @param position 可选 显示位置"top","bottom","center",默认值center
     * @param duration 可选 提示语显示时间 "short","long",默认值short
     */
    toast(message: TPageToast | string, position?: string, duration?: string): void;
    /**
     * 删除菜单项
     */
    cleanMenu(): void;
    /**
     * 设置标题栏左侧按钮（只能设置一个左侧按钮）
     * @param args
     */
    showLeftBtn(args: TPageShowLeftBtnArgs): void;
    /**
     * 设置页面标题及标题颜色
     * @param title 必填 页面标题
     * @param textColor 可选 页面标题颜色值
     */
    setTitle(title: string, textColor: string): void;
    /**
     * 设置页面标题栏背景颜色
     * @param bgColor 必填 页面标题栏背景颜色值
     */
    setTitleBarBg(bgColor: string): void;
    /**
     * 页面激活状态绑定函数
     * @param args 页面激活参数对象
     */
    bindPageActived(args: TPageBindPageActivedArgs): void;
    /**
     * 获取应用信息
     * @param args 获取应用信息参数对象
     */
    getAppInfo(args: TPageAppInfoArgs): void;
    /**
     * 组织人员选择
     * @param  cfg 组织人员选择参数对象
     */
    OrgSelect(cfg: TPageOrgSelectArgs): void;
    /**
     * 高级搜索
     * @param  cfg  高级搜索参数对象
     * @param  router  可选 页面路由参数对象
     */
    rxmSearch(cfg: TPageSearchCfgArgs, router: TPageRouterArgs): void;
    /**
     * 获取deviceId（Force）
     * @param  cfg 获取deviceId参数对象
     */
    getForceSysDeviceID(cfg: TPageGetForceIdArgs): void;
    /**
     * 启动第三方app
     * @param  cfg 启动第三方app参数对象
     */
    openApp(cfg: TPageOpenAppArgs): void;
    /**
     * 向其他窗口发送通知
     * @param  pageIds 接收notify的窗口id,多个以英文逗号分隔
     * @param  notifyObj 发送的消息
     */
    postPageNotify(pageIds: String, notifyObj: TPageNotifyObjArgs): void;
    /**
     * 绑定函数，接受来自其他窗口页面的消息
     * @param args 绑定函数接受来自其他窗口页面消息参数对象
     */
    bindPageNotify(args: TPageBindPageNotifyArgs): void;
    /**
     * 绑定bodyready函数,触发回调
     * @param  args  绑定bodyready参数对象
     */
    bindPageReady(args: TPageBindBodyReadyArgs): void;
}
