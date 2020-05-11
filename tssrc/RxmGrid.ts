/**  
 * Grid表格插件
 * @see 表格类数据展现插件
 * @see RxmGrid插件使用示例
 * ```
   //插件引用
   define(['RxmGrid'],function(grid){
        
   }
 * ```
 * @version  1.4.3 
 */

/**
 * 表格数据对象
 */
type TRxmGridReloadDataArgs = {
    /**
     * 数据请求类型，默认为URl
     */
    type: string, 
    /**
     * 数据请求URL地址,默认为 getServer() + "/resoft/origianl/xxx" 
     */
    value: string
}

/**
 * 表格reload参数对象
 */
type TRxmGridReloadArgs = {
     /** 
      * 表格数据
      * ```
         //数据类型为对象类型
         {type: "URL", value: getServer() + "/resoft/origianl/xxx" }
      * ```
      */
     data:TRxmGridReloadDataArgs, 
     /**
      * 数据请求URL参数
      */
     queryParam:Object,  
     /**
      * -1 上一页  -2 下一页  0 config当前页进行刷新，>0 从pageSize页开始取数据，每次只是取1页
      */
     totalPage:number, 
     /**
      * reload完成回调函数
      */
     loadComplete:
      /** 
       * @param  e Event对象
       * @param  data  表格reload加载数据信息
       */
      (e?:Event,data?:Object)=>boolean|undefined



}

/**
 * 事件参数对象
 */
type TRxmGridEventArgs = {
    /** 
     * 事件绑定的回叫函数
     */
    callback?: (b:any,a: Array<any>) => any;
    fn?: (b:any,a: Array<any>) => any;
    /** 
     * 事件绑定传入的数据参数
     */
    data?:any, 
    /** 
     * 是否可多次激发
     */
    one?:boolean,
    selector?:string
}

/**
 * 表格加载数据完成参数对象
 */
type TRxmGridLoadCompleteArgs = {
     /**
      * 传入的参数值
      */
     data?:Object,
     /**
      * load完成回调函数
      */
     fn?:
      /** 
       * @param  e Event对象
       * @param  data  表格加载数据信息
       */
     (e?:Event,data?:any)=>boolean|undefined
}

/**
 * 表格设置刷新提示语参数对象
 */
type TRxmGridTipArgs = {
      /**
       * 顶部刷新,下拉刷新提示语,默认值为"下拉刷新数据..."
       */
      topTipBegin: string,
      /**
       * 顶部刷新,松手刷新提示语,默认值为"松开即可刷新..."
       */
      topTipRefresh: string,
      /**
       * 顶部刷新,加载中提示语,默认值为"加载中..."
       */
      topTipLoading: string,
      /**
       * 顶部刷新,刷新成功提示语,默认值为"数据刷新成功"
       */
      topTipSuccess: string,
      /**
       * 顶部刷新,刷新失败提示语,默认值为"数据刷新失败"
       */
      topTipError: string,
      /**
       * 底部刷新,加载中提示语,默认值为"加载中..."
       */
      bottomTipLoading: string,
      /**
       * 底部刷新,加载失败提示语,默认值为"数据加载失败"
       */
      bottomTipError: string,
      /**
       * 底部刷新,没有更多提示语,默认值为"没有更多了"
       */
      bottomTipEnd: string,
      /**
       * 底部刷新,没有更多提示语,默认值为"暂无数据！"
       */
      nodataTip: string
}
type  TRxmGridCnf={
    id:string
}
interface RxmGrid{
    /**
     * 渲染表格行数据(可重写)
     * @param  row 行数据对象
     * @param  $tr 表格行对象
     * @returns $tr 表格行对象 jquery对象
     * ```
        //createRow函数重写示例
        ...
        var myCreateRow = function(row, $tr){
            //创建表格行数据   共4列  icon 数据内容 (标题+内容)  右向箭头   复选框(默认隐藏)  
            var $tdIcon = $('<span><td</span> class="rxm-td-icon"><span></</span>td>');
            var $tdInfo = $('<span><</span>td><span></</span>td>');
            var $tdArrow = $('<span><td</span> class="rxm-td-arrow" ><span></</span>td>');
            var $tdCheckbox = $('<span><td</span> class="rxm-td-checkbox fix" style="display:none;" ><span></</span>td>');
            var firstField = '1';
            //循环创建icon与数据列
            for (var j = 0, item; item = this._config.layout[j++]; j < item.length) {
                var tdName = item.name;
                var tdValue = item.format ? item.format({ "row": row }) : row[item.field];
                if (item.field == "icon") {
                    tdValue = (tdValue || tdValue == 0) ? "" + tdValue : "";
                    $tdIcon.append(tdValue);
                    $tr.append($tdIcon);
                } else {
                    tdValue = (tdValue || tdValue == 0) ? "" + tdValue : "";
                    if (firstField === '1') {
                        if (tdName !== "" && tdName !== null) {
                            $tdInfo.append("<span><span</span> class='rxm-col-name'>" + tdName + '&nbsp;:&nbsp;' + "</span>/span><span<span></span> class='rxm-col-value'>" + tdValue + "<span></</span>span>");
                            firstField = '2';
                        } else {
                            $tdInfo.append("<span><span</span> class='rxm-col-value'>" + tdValue + "<span></</span>span>");
                            firstField = '2';
                        }
                    } else {
                        if (tdName !== "" && tdName !== null) {
                            //其他字段换行
                            $tdInfo.append("</br><span><span</span> class='rxm-col-name'>" + tdName + '&nbsp;:&nbsp;' + "</span>span><span<span></span> class='rxm-col-value'>" + tdValue + "<span></</span>span>");
                        } else {
                            //其他字段换行
                            $tdInfo.append("</br><span><span</span> class='rxm-col-value'>" + tdValue + "<span></</span>span>");
                        }
                    }
                }
                $tr.append($tdInfo);
            }
            //创建checkbox列   multi属性配置为true：多选框      false：单选按钮
            if (typeof this._config.multi != "undefined") {
                $tdCheckbox.append('<sapn><input</span> class="rxm-multi-check" type="' + (this._config.multi ? 'checkbox' : 'radio') + '" name="s_gird_multi_' + (this._config.id) + '" ' + (row["_checked"] ? "checked" : "") + '>');
                $tr.append($tdCheckbox);
            }
            //创建箭头列 
            $tdArrow.append($('<sapn><img</span> src="' + this._arrowImg + '"/>'));
            $tr.append($tdArrow);
            //渲染表格行后触发
            if (typeof (this._config.onAfterRenderRow) == "function") {
                this._config.onAfterRenderRow.apply($tr, [row]);
            }
            return $tr;
        }
        //重写createRow函数
        grid.createRow = myCreateRow 
        ...
    * ```
    */
   createRow(row:Object,$tr:Object):Object

    /**
     * 获取当前表格所有数据
     * @param bClone true取缓存中的全部 ,undefined ,false 取视图数据 ,此为默认
     * @param bCache true克隆数据 ,undefined ,false 返回 view 数据此为默认
     * @returns 表格所有数据对象
     */
    getAllData(bClone:boolean,bCache:boolean):Object

    /**
    * 根据domelement信息获取所在的视图行索引
    * @param domElement dom选择器
    * @returns index 视图行索引
    */
    getRowViewIndex(domElement:string):number

    /**
     * 获取当前选择行索引
     * @returns selectedIdxArr 索引数组
     */
    getSelectedRow():Array<number>

    /**
     * 获取选中行数据
     * @param  bClone true取缓存中的全部 ,undefined ,false 取视图数据 ,此为默认
     * @returns rd 选中数据对象
     */
    getSelectedData(bClone:boolean):Object

    /**
     * 获取滑动行数据
     * @param domElement - dom选择器
     * @param bClone true取缓存中的全部 ,undefined ,false 取视图数据 ,此为默认
     * @returns rd - 当前滑动行数据对象
     */
    getSlideRowData(domElement:string,bClone:boolean):Object


    /**
     * 通过index选中一行、多行或者全选
     * @param viewIndexs 行索引 此参数可为数字、数组、空
     * @returns void
     */
    checkRow(viewIndexs:number|Array<number>|''):void


    /**
     * 通过index取消选中一行、多行或者全部
     * @param viewIndexs 行索引 此参数可为数字、数组、空
     * @returns void
     */
    uncheckRow(viewIndexs:number|Array<number>|''):void

    /**
     * 获取page信息
     * @returns {Object}  page信息对象
     */
    getPageInfo():Object

    /**
     * 重新加载表格(数据更新)
     * @param arg对象参数 共有4个属性：data,queryParam,totalPage,loadComplete
     * @returns void
     */
    reload(arg:TRxmGridReloadArgs):void

    /**
     * 触发长按状态函数
     */
    initPress():void

    /**
     * 取消长按状态
     */
    cancelPress():void

    /**
     * 全选/取消全选函数
     */
    allSelect():void
    
    /**
     * 设置长按状态
     * @param  value 状态值参数
     * @returns boolean 长按状态
     */
    attriPressFlag(value:boolean):boolean

    /**
     * 设置top状态
     * @param value 状态值参数
     * @return boolean  top状态
     */
    attriTopFlag(value:boolean):boolean

    /**
     * 设置bottom状态
     * @param value 状态值参数
     * @returns boolean bottom状态
     */
    attriBottomFlag(value:boolean):boolean

    /**
     * 表格绑定滑动至顶部事件
     * @param arg 参数对象
     * @param scope this对象
     */
    bindSwipeInTop(arg:TRxmGridEventArgs,scope:any):void

    /**
     * 表格绑定滑动至顶部开始事件
     * @param arg 参数对象
     * @param scope this对象
     */
    bindSwipeInTopBegin(arg:TRxmGridEventArgs,scope:any):void

    /**
     * 表格绑定滑动至顶部结束事件
     * @param arg 参数对象
     * @param scope this对象
     */
    bindSwipeInTopEnd(arg:TRxmGridEventArgs,scope:any):void

    /**
     * 表格绑定滑动至顶部结束后事件
     * @param arg 参数对象
     * @param scope this对象
     */
    bindSwipeInTopEndAfter(arg:TRxmGridEventArgs,scope:any):void

    /**
     * 表格绑定滑动至底部事件
     * @param arg 参数对象
     * @param scope this对象
     */
    bindSwipeInBottom(arg:TRxmGridEventArgs,scope:any):void

    /**
     * 表格绑定滑动至底部开始事件
     * @param arg 参数对象
     * @param scope this对象
     */
    bindSwipeInBottomBegin(arg:TRxmGridEventArgs,scope:any):void
    
    /**
     * 表格绑定滑动至底部结束事件
     * @param arg 参数对象
     * @param scope this对象
     */
    bindSwipeInBottomEnd(arg:TRxmGridEventArgs,scope:any):void

    /**
     * 表格绑定滑动至底部后事件
     * @param arg 参数对象
     * @param scope this对象
     */
    bindSwipeInBottomAfter(arg:TRxmGridEventArgs,scope:any):void

    /**
     * 表格行绑定tap事件
     * @param arg 参数对象
     * @param scope this对象
     */
    bindTapLineElement(arg:TRxmGridEventArgs,scope:any):void

    /**
     * 表格行绑定长按事件
     * @param arg 参数对象
     * @param scope this对象
     */
    bindPressLineElement(arg:TRxmGridEventArgs,scope:any):void

    /**
     * 表格绑定reload完成后触发的事件
     * @param arg 参数对象
     * @param scope this对象
     */
    bindLoadComplete(arg:TRxmGridLoadCompleteArgs,scope:any):void

    /**
    * 刷新数据提示语定制 
    * @param arg - 提示语对象
    * ```
    ...  
    //函数调用示例
    grid.attrRefreshTip({
        topTipBegin: "",
        topTipRefresh: "",
        topTipLoading: "",
        topTipSuccess: "",
        topTipError: "",
        bottomTipLoading: "",
        bottomTipError: "",
        bottomTipEnd: "",
        nodataTip: ""
    })
    ...
    * ```
    */
   attrRefreshTip(arg:TRxmGridTipArgs):void
}
