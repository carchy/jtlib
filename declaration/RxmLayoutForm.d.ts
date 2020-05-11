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
declare type TRxmFormSubmitData = {
    /** insert 的表及数据信息 */
    added?: {
        [
            /**表名 */
            tableName: string]: Array<{
            [
                /**列名 */
                columnName: string]: Number | Boolean | String;
        }>;
    };
    deleted?: {
        [/**表名 */ tableName: string]: Array<{
            [
                /**列名 */
                columnName: string]: Number | Boolean | String;
        }>;
    };
    modified?: {
        [/**表名 */ tableName: string]: Array<{
            [
                /**列名 */
                columnName: string]: Number | Boolean | String;
        }>;
    };
};
/**
 * 表单事件绑定参数
 */
declare type TRxmFormBindArg = {
    /**
       * 事件绑定的回叫函数
       */
    callback?: (b: any, a: Array<any>) => any;
    /**
     * 事件绑定的回叫函数
     */
    fn?: (b: any, a: Array<any>) => any;
    /**
     * 事件绑定传入的数据参数
     */
    data?: any;
    /**
     * 是否可多次激发
     */
    one?: boolean;
    selector?: string;
    id?: string;
    name?: string;
};
declare type TRxmLayoutFormArgs = {
    id: string;
};
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
declare class RxmLayoutForm {
    /**
     * 校验每个input输入值是否正确
     * @returns 是否正确
     */
    validateEach(): boolean;
    /**
     * 校验单个input的输入值是否正确
     * @param it 待校验的input
     * @returns 是否正确
     */
    validateOne(it: HTMLElement): boolean;
    /**
     * 获取或者设置 form 的编辑状态
     * @param dirtied 设置 form的修改状态
     */
    attrDirtied(dirtied?: boolean): boolean;
    /**
     * 获取表单需要提交的所有数据 add
     * @returns 表单需要提交的所有数据
     */
    getSubmitData(): TRxmFormSubmitData;
    /**
     * 得到form表单全部的input值
     * @returns 表单数据
     */
    getFormData(): TRxmFormSubmitData;
    /**
     * 虚函数 重写表单需要提交的所有数据
     * @param data
     * @returns
     */
    formatSubmitData(data: TRxmFormSubmitData | any): TRxmFormSubmitData | any;
    /**
     * 虚函数 重写form数据
     * @param data
     */
    formatFormData(data: TRxmFormSubmitData): TRxmFormSubmitData;
    /**
     * 设置或者改变input  select 值
     * @param name 名字，必选
     * @param value 值  ，可选 undefined 时，获取 name input 的值
     * @param trigger 可选  ，是否发送 消息 formValueChanged
     * @param from 可选  设置者
     */
    inputValue(name?: string, value?: any, trigger?: boolean, from?: String): any;
    /**
     * 数据将要被改变事件
     * @param e
     * @param scope  this对象
     */
    bindInputValueChanging(arg: TRxmFormBindArg, scope?: any): void;
    /**
     * 表单数据被改变的事件
     * @param e
     * @param scope  this对象
     */
    bindFormValueChanged(arg: TRxmFormBindArg, scope?: any): void;
    /**
     * 表单被提交事件绑定
     * @param arg fn gird
     * @param scope
     */
    bindFormSubmit(arg: TRxmFormBindArg, scope?: any): void;
    /**
     * 输入框的值已经被转变事件绑定
     * @param e
     * @param scope
     */
    bindInputValueChanged(arg: TRxmFormBindArg, scope?: any): void;
    /**
     * 表单项有转变
     * @param e
     * @param scope
     */
    /**
     * 获取加载时数据初始化信息，可以重写改变初始化信息
     */
    getInitForm(): any;
    /**
     * 初始化校验参数
     * @param validateArgs 校验参数
     */
    initValidate(validateArgs: any): void;
    /**
     * 重置form修改状态
     */
    clear(): void;
    reload(ars: TFormReloadArgs): void;
}
