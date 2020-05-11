
/**  
 * RxmLayoutForm插件
 * @see RxmLayoutForm插件,表单插件
 * @see RxmLayoutForm插件使用示例
 * ```
   //插件引用
   define(['RxmLayoutForm'],function(RxmLayoutForm){
      var form001 = new RxmLayoutForm({id:"form001"})

   }
 * ```
 * @version  1.4.3 
 */
/**
 * 表单提交数据信息
 */
type TRxmFormSubmitData={
  /** insert 的表及数据信息 */
  added?:{
      [
        /**表名 */
        tableName:string]:Array<{
          [
            /**列名 */
            columnName:string]:Number|Boolean|String
        }>
  },
  deleted?:{
    [/**表名 */
    tableName:string]:Array<{
      [
        /**列名 */
        columnName:string]:Number|Boolean|String
    }>
  },
  modified?:{
     [/**表名 */
      tableName:string]:Array<{
        [
          /**列名 */
          columnName:string]:Number|Boolean|String
      }>}
}
/**
 * 表单事件绑定参数
 */
type TRxmFormBindArg = {
  /** 
     * 事件绑定的回叫函数
     */
    callback?: (b:any,a: Array<any>) => any;
    /** 
     * 事件绑定的回叫函数
     */
    fn?: (b:any,a: Array<any>) => any;
    /** 
     * 事件绑定传入的数据参数
     */
    data?:any, 
    /** 
     * 是否可多次激发
     */
    one?:boolean,
    selector?:string,
    id?:string,
    name?:string
}

type TRxmLayoutFormArgs = {
  id: string
}

/**  
 * RxmLayoutForm插件
 * @see RxmLayoutForm插件,表单插件
 * @see RxmLayoutForm插件使用示例
 * ```
   //插件引用
   define(['RxmLayoutForm'],function(RxmLayoutForm){
      
   }
 * ```
 * @version  1.4.3 
 */


/** */
class RxmLayoutForm {
  
  /**
   * 校验每个input输入值是否正确
   * @returns 是否正确
   */
  validateEach():boolean{return true}
  /**
   * 校验单个input的输入值是否正确
   * @param it 待校验的input 
   * @returns 是否正确
   */
  validateOne(it:HTMLElement):boolean{return true}
 
  /**
   * 获取或者设置 form 的编辑状态
   * @param dirtied 设置 form的修改状态
   */
  attrDirtied(dirtied?:boolean):boolean{return true}
  
  /**
   * 获取表单需要提交的所有数据 add 
   * @returns 表单需要提交的所有数据
   */
  
  getSubmitData(): TRxmFormSubmitData{return{}}
  /**
   * 得到form表单全部的input值
   * @returns 表单数据
   */
  getFormData():TRxmFormSubmitData{return{}}
  /**
   * 虚函数 重写表单需要提交的所有数据
   * @param data 
   * @returns
   */
  formatSubmitData(data:TRxmFormSubmitData|any):TRxmFormSubmitData|any{return{}}
  /**
   * 虚函数 重写form数据
   * @param data 
   */
  formatFormData(data:TRxmFormSubmitData):TRxmFormSubmitData{return{}}
  /**
   * 设置或者改变input  select 值
   * @param name 名字，必选
   * @param value 值  ，可选 undefined 时，获取 name input 的值
   * @param trigger 可选  ，是否发送 消息 formValueChanged
   * @param from 可选  设置者
   */
  inputValue(name?:string,value?:any,trigger?:boolean,from?:String):any{return{}}
  /**
   * 数据将要被改变事件
   * @param e 
   * @param scope  this对象
   */

  bindInputValueChanging(arg:TRxmFormBindArg,scope?:any):void{}
  /**
   * 表单数据被改变的事件
   * @param e 
   * @param scope  this对象
   */
  bindFormValueChanged(arg:TRxmFormBindArg,scope?:any):void{}
  // /**
  //  * 表单被选择事件
  //  * @param e 
  //  * @param scope 
  //  */
  // bindFormSelect(e: Event,scope:Object):void{}
  /**
   * 表单被提交事件绑定
   * @param arg fn gird
   * @param scope 
   */
  bindFormSubmit(arg:TRxmFormBindArg,scope?:any):void{}
  /**
   * 输入框的值已经被转变事件绑定
   * @param e 
   * @param scope 
   */
  bindInputValueChanged(arg:TRxmFormBindArg,scope?:any):void{}
  /**
   * 表单项有转变
   * @param e 
   * @param scope 
   */
  // onchange(e: Event,scope:Object):void{}
  // /**
  //  * 获取表单数据
  //  * @returns 表单所有数据
  //  */
  // serialize(data?:any):any{return{}}
  // /**
  //  * 设置表单值
  //  * @param data json对象，多选时为数组
  //  * @param trigger 是否激活input change 事件，undefined，true 激活，false 不激活
  //  */
  // deserialize(data:any, trigger?:boolean):void{}
  /**
   * 获取加载时数据初始化信息，可以重写改变初始化信息
   */
  getInitForm():any{return{}}
  // /**
  //  * 将包含[[]]的属性转换为json
  //  * @param name 以下三种形式均可：1.dom对象；2.需要选择的标签name；3.jquery对象
  //  * @param attrName 标签属性
  //  */
  // getAttrValue(name:any, attrName:string):any{return{}}
  /**
   * 初始化校验参数
   * @param validateArgs 校验参数
   */
  initValidate(validateArgs:any):void{}
  /**
   * 重置form修改状态
   */
  clear():void{}
  reload(ars:TFormReloadArgs):void{}
}


