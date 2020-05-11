"use strict";
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
class RxmTree {
    /**
     * 获取树的全部节点数据
     */
    getNodes() { return []; }
    /**
     * 新增节点
     * @param args 添加节点的数据对象
     */
    addNodes(args) { }
    /**
     * 删除节点
     * @param node 需要被删除的节点数据
     * @param callbackFlag callbackFlag = true 表示执行此方法时触发 beforeRemove & onRemove 事件回调函数;callbackFlag = false 表示执行此方法时不触发事件回调函数
     */
    removeNode(node, callbackFlag) { }
    /**
     * 更新节点
     * @param node 需要被更新的节点数据
     * @param checkTypeFlag checkTypeFlag = true 表示按照 setting.check.chkboxType 属性进行父子节点的勾选联动操作;checkTypeFlag = false 表示只修改此节点勾选状态，无任何勾选联动操作
     */
    updateNode(node, checkTypeFlag) { }
    /**
     * 销毁树
     */
    destroy() { }
    /**
     * 重新加载树
     * @param ajaxParam 数据请求的参数
     * @param setting 树的配置
     */
    reload(ajaxParam, setting) { }
    /**
     * 绑定加载树完成后执行的回调函数
     * @param args 绑定命令参数
     */
    bindReloadOk(args /*TRxmcCmdBind*/) { }
    /**
     * 展开 / 折叠 全部节点
     * @param expandFlag expandFlag = true 表示 展开 全部节点;expandFlag = false 表示 折叠 全部节点
     * @returns true 表示 展开 全部节点;false 表示 折叠 全部节点
     */
    expandAll(expandFlag) { return true; }
    /**
     * 获取 zTree 当前被选中的节点数据集合
     * @returns 当前被选中的节点数据集合
     */
    getSelectedNodes() {
        throw ('');
    }
    /**
     * 去除节点数据中的ztree节点特殊属性，返回用户数据
     * @param args 节点数据集合
     * @returns 用户数据
     */
    toPlainNodes(args) { return []; }
    /**
     * 去除选中节点中的ztree节点特殊属性，返回用户数据
     * @returns 用户数据
     */
    getPlainSelectedNodes() { return {}; }
    /**
     * 去除'checked'节点中的ztree节点特殊属性，返回用户数据
     * @returns 用户数据
     */
    getPlainCheckedNodes() { return {}; }
}
