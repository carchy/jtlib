/**  
 * iconlist插件
 * @see iconlist展现插件
 * ```
   //插件引用
   define(['RxmIconList'],function(Iconlist){
        
   }
 * ```
 * @version  1.4.3 
 */

/**
 * 单个icon对象
 */

type iconDataArg = {
     /** 
      * icon标题
      */
     title:string, 
     /**
      * icon图标样式
      */
     iconClass:string,  
     /**
      * icon标识id
      */
     id:string, 
     /**
      * 大类别标题
      */
     categoryTitle:string,
     /**
      * （保留）icon跳转链接地址或路由地址
      */
     href:string,
     /**
      * （保留）单选多选状态
      */
     selected:string
}

/**
 * icon数据集
 */
type iconsDataArg = {
    /** 
     * icon大类别
     */
    categoryTitle:string,
    /** 
     * icon数组，每个元素格式同iconDataArg
     */
    listData:Array<iconDataArg>,
}

interface Iconlist{
    /**
     * 添加新的icon
     * @param iconData 单个icon对象
     */
    addIcon( iconData:iconDataArg ):void

    /**
     * 删除指定ID的icon
     * @param id icon标识id
     */
    removeIcon( id:string ):void

    /**
     * 获取iconlist数据
     * @returns iconsDataArg 返回整个iconlist数据
     */
    getData():iconsDataArg

    /**
     * 通过标识id获取选中数据
     * @param id 
     * @returns iconDataArg 返回单个icon数据
     */
    getSelectedDataById(id:string):iconDataArg

    /**
     * 获取组件id
     * @param value 状态值参数
     * @returns String 组件id
     */
    attrId(id:string):string

    /**
     * 点击icon事件回调
     * @param arg 参数对象
     */
    bindTapIcon(arg:Function):void

    /**
     * 添加icon事件回调
     * @param arg 
     */
    bindRxmAddIcon(arg:Function):void

    /**
     * 删除icon事件回调
     * @param arg 参数对象
     */
    bindRxmRemoveIcon(arg:Function):void
}
