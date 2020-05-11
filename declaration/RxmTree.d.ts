/**
 * RxmTree插件
 * @see RxmTree插件,树形结构插件
 * @see RxmTree插件使用示例
 * ```
   //插件引用
   define(['RxmTree'],function(RxmTree){
      
   }
 * ```
 * @version  1.4.3
 */
declare type TRxmTreeSetting = {
    /**
     * treeId 必填
    */
    id: string;
    data?: TRxmTreeDataObj;
    async?: TRxmTreeAsyncObj;
    check?: TRxmTreeCheckObj;
    /**
     * 参考Ztree中setting的callback对象
     */
    callback?: Object;
    /**
     * 参考Ztree中setting的edit对象
     */
    edit?: Object;
    /**
     * 参考Ztree中setting的view对象
     */
    view?: Object;
};
declare type TRxmTreeDataObj = {
    /**
     * keep.leaf:true / false 分别表示 锁定 / 不锁定 叶子节点属性;leaf.parent:true / false 分别表示 锁定 / 不锁定 父节点属性
     *
     */
    keep?: Object;
    key?: TRxmTreeKeyObj;
    simpleData?: TRxmTreeSimpleDataObj;
};
declare type TRxmTreeKeyObj = {
    /**
     * 节点数据中保存 check 状态的属性名称,默认值："checked"
     */
    checked?: string;
    /**
     * 节点数据中保存子节点数据的属性名称,默认值："children"
     */
    children?: string;
    /**
     * 节点数据保存节点是否为父节点的属性名称,默认值："isParent"
     */
    isParent?: string;
    /**
     * 节点数据保存节点名称的属性名称,显示名称的字段名
     */
    name?: string;
    /**
     * 节点数据保存节点提示信息的属性名称
     */
    title?: string;
    /**
     * 节点数据保存节点链接的目标URL的属性名称，默认值："url"
     */
    url?: string;
    /**
     * 节点数据保存节点是否隐藏的属性名称,默认值："isHidden"
     */
    isHidden?: string;
};
declare type TRxmTreeSimpleDataObj = {
    /**
     * true / false 分别表示 使用 / 不使用 简单数据模式
     */
    enable?: boolean;
    /**
     * 节点数据中保存唯一标识的属性名称,数据id对应的字段名
     */
    idKey?: string;
    /**
     * 节点数据中保存其父节点唯一标识的属性名称,数据pid对应的字段名
     */
    pIdKey?: string;
    /**
     * 用于修正根节点父节点数据
     */
    rootPid?: boolean;
};
declare type TRxmTreeAsyncObj = {
    /**
     * 异步加载时需要自动提交父节点属性的参数
     */
    autoParam?: Array<String>;
    /**
     * Ajax 提交参数的数据类型。[setting.async.enable = true 时生效],默认值："application/x-www-form-urlencoded"
     */
    contentType?: string;
    /**
     * 用于对 Ajax 返回数据进行预处理的函数
     */
    dataFilter?: Function;
    /**
     * Ajax 获取的数据类型。[setting.async.enable = true 时生效],默认值："text"
     */
    dataType?: string;
    /**
     * 是否开启异步加载模式,默认值：false
     */
    enable?: boolean;
    /**
     * 请求提交的静态参数键值对
     * Array<String>:["id", "1", "name", "test"];
     * JSON: { "id":"1", "name":"test"};
     */
    otherParam?: Object;
    /**
     * http 请求模式,默认值："post"
     */
    type?: string;
    /**
     * 获取数据的 URL 地址
     */
    url?: string;
};
declare type TRxmTreeCheckObj = {
    /**
     * 设置自动关联勾选时是否触发 beforeCheck / onCheck 事件回调函数
     */
    autoCheckTrigger?: boolean;
    /**
     * Y 属性定义 checkbox 被勾选后的情况；
     * N 属性定义 checkbox 取消勾选后的情况；
     * "p" 表示操作会影响父级节点；
     * "s" 表示操作会影响子级节点
     */
    chkboxType?: Object;
    /**
     * 勾选框类型(checkbox 或 radio）
     */
    chkStyle?: string;
    /**
     * 节点上是否显示 checkbox / radio,默认值: false
     */
    enable?: boolean;
    /**
     * 当父节点设置 nocheck = true 时，设置子节点是否自动继承 nocheck = true 。默认值: false
     */
    nocheckInherit?: boolean;
    /**
     * 当父节点设置 chkDisabled = true 时，设置子节点是否自动继承 chkDisabled = true 。默认值: false
     */
    chkDisabledInherit?: boolean;
    /**
     * radio 的分组范围,默认值："level"
     */
    radioType?: string;
};
declare type TRxmTreeNodeObj = {
    /**
     * 节点的 checkBox / radio 的 勾选状态,默认值：false;true 表示节点的输入框被勾选,false 表示节点的输入框未勾选
     *
     */
    checked?: boolean;
    /**
     * 节点的子节点数据集合
     */
    children?: Array<TRxmTreeNodeObj>;
    /**
     * 设置节点的 checkbox / radio 是否禁用,默认值：false;true 表示此节点的 checkbox / radio 被禁用。false 表示此节点的 checkbox / radio 可以使用。
     *
     */
    chkDisabled?: boolean;
    /**
     * 节点被点击试执行的回调函数
     */
    click?: Function;
    /**
     * 获取节点 checkbox / radio 半勾选状态
     */
    getCheckStatus?: Function;
    /**
     * 获取节点在同级节点中的位置
     * 返回值Number,节点在同级节点中的位置。(从 0 开始)
     */
    getIndex?: Function;
    /**
     * 获取与节点相邻的后一个节点
     * 返回值treeNodeObj,与节点相邻的后一个节点。
     */
    getNextNode?: Function;
    /**
     * 获取节点的父节点
     * 返回值treeNodeObj,节点的父节点的数据对象。
     */
    getParentNode?: Function;
    /**
     * 获取节点的所有父节点（包括自己）
     * 返回值Array<TRxmTreeNodeObj>,节点的所有父节点的数据集合（包括自己）
     */
    getPath?: Function;
    /**
     * 获取与节点相邻的前一个节点
     * 返回值treeNodeObj,节点相邻的前一个节点。
     */
    getPreNode?: Function;
    /**
     * 强制节点的 checkBox / radio 的 半勾选状态
     * true 表示节点的输入框 强行设置为半勾选,false 表示节点的输入框 根据 zTree 的规则自动计算半勾选状态
     */
    halfCheck?: boolean;
    /**
     * 节点自定义图标的URL路径
     */
    icon?: string;
    /**
     * 父节点自定义折叠时图标的 URL 路径
     */
    iconClose?: string;
    /**
     * 父节点自定义展开时图标的 URL 路径
     */
    iconOpen?: string;
    /**
     * 节点自定义图标的 className
     */
    iconSkin?: string;
    /**
     * 判断 treeNode 节点是否被隐藏
     * true 表示被隐藏,false 表示被显示
     */
    isHidden?: boolean;
    /**
     * 记录 treeNode 节点是否为父节点
     * true 表示是父节点,false 表示不是父节点
     */
    isParent?: boolean;
    /**
     * 节点名称
     */
    name?: string;
    /**
     * 设置节点是否隐藏 checkbox / radio,默认值：false
     * true 表示此节点不显示 checkbox / radio，不影响勾选的关联关系，不影响父节点的半选状态;false 表示节点具有正常的勾选功能
     */
    nocheck?: boolean;
    /**
     * 记录 treeNode 节点的 展开 / 折叠 状态,默认值：false
     * true 表示节点为 展开 状态;false 表示节点为 折叠 状态
     */
    open?: boolean;
    /**
     * 设置点击节点后在何处打开url
     */
    target?: string;
    /**
     * 节点链接的目标URL
     */
    url?: string;
};
declare type TRxmTreeAddNodesArgs = {
    /**
     *   指定的父节点，如果增加根节点，请设置 parentNode 为 null 即可。
    */
    parentNode?: TRxmTreeNodeObj;
    /**
     * 可选 新节点插入的位置（从 0 开始）index = -1 时，插入到最后
    */
    index?: number;
    /**
     * 需要增加的节点数据集合，数据只需要满足 zTree 的节点数据必需的属性即可
    */
    newNodes?: Array<TRxmTreeNodeObj>;
    /**
     * 设定增加节点后是否自动展开父节点。true 时，不展开父节点，其他值或缺省状态都自动展开。
    */
    isSilent?: boolean;
};
declare type TRxmtreeReload = {
    url?: string;
    success?: Function;
    error?: Function;
    rxmLoadFormat?: (data: any) => any;
};
declare class RxmTree {
    /**
     * 获取树的全部节点数据
     */
    getNodes(): Array<TRxmTreeNodeObj>;
    /**
     * 新增节点
     * @param args 添加节点的数据对象
     */
    addNodes(args: TRxmTreeAddNodesArgs): void;
    /**
     * 删除节点
     * @param node 需要被删除的节点数据
     * @param callbackFlag callbackFlag = true 表示执行此方法时触发 beforeRemove & onRemove 事件回调函数;callbackFlag = false 表示执行此方法时不触发事件回调函数
     */
    removeNode(node: TRxmTreeNodeObj, callbackFlag: boolean): void;
    /**
     * 更新节点
     * @param node 需要被更新的节点数据
     * @param checkTypeFlag checkTypeFlag = true 表示按照 setting.check.chkboxType 属性进行父子节点的勾选联动操作;checkTypeFlag = false 表示只修改此节点勾选状态，无任何勾选联动操作
     */
    updateNode(node: TRxmTreeNodeObj, checkTypeFlag: boolean): void;
    /**
     * 销毁树
     */
    destroy(): void;
    /**
     * 重新加载树
     * @param ajaxParam 数据请求的参数
     * @param setting 树的配置
     */
    reload(ajaxParam: TRxmtreeReload, setting?: TRxmTreeSetting): void;
    /**
     * 绑定加载树完成后执行的回调函数
     * @param args 绑定命令参数
     */
    bindReloadOk(args: any): void;
    /**
     * 展开 / 折叠 全部节点
     * @param expandFlag expandFlag = true 表示 展开 全部节点;expandFlag = false 表示 折叠 全部节点
     * @returns true 表示 展开 全部节点;false 表示 折叠 全部节点
     */
    expandAll(expandFlag: boolean): boolean;
    /**
     * 获取 zTree 当前被选中的节点数据集合
     * @returns 当前被选中的节点数据集合
     */
    getSelectedNodes(): Array<TRxmTreeNodeObj>;
    /**
     * 去除节点数据中的ztree节点特殊属性，返回用户数据
     * @param args 节点数据集合
     * @returns 用户数据
     */
    toPlainNodes(args: Array<TRxmTreeNodeObj>): Array<Object>;
    /**
     * 去除选中节点中的ztree节点特殊属性，返回用户数据
     * @returns 用户数据
     */
    getPlainSelectedNodes(): Object;
    /**
     * 去除'checked'节点中的ztree节点特殊属性，返回用户数据
     * @returns 用户数据
     */
    getPlainCheckedNodes(): Object;
}
