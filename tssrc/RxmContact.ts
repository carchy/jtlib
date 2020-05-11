/**  
 * RxmContact
 * @see RxmContact联系人插件，调用系统联系人插件，提供打开,添加,删除,查找,修改联系人等功能
 * @see RxmContact插件使用示例
 * ```
   //插件引用
   define(['RxmContact'],function(RxmContact){
      
   }
 * ```
 * @version  1.4.3 
 */

/**
 * 打开联系人参数
 */
type contactOpenArg = {

  callback:
  /** 回调函数
   *@param e
   *@param data {"name":"","num":"","email":""},如多选，为数组

   */
  (e: Event, data: Object | Array<Object>) => boolean | undefined,
  /**用户数据*/
  data?: Object,
  /**是否多选联系人标记 true时，多选联系人；false时，单选联系人*/
  multi: Boolean

}
/**
 * 添加联系人参数
 */
type contactAddArg = {

  callback:
  /** 回调函数
  *@param e
  *@param data 1:成功 0：失败
  */
  (e: Event, data: String) => boolean | undefined,
  /**用户数据*/
  data?: Object,
  /**名称*/
  name: String,
  /**电话号码*/
  num: String,
  /**邮件*/
  email: String,
  /**添加过程中是否隐藏弹出"确认添加"提示框，1：需要隐藏；0或者不传：不需要隐藏:*/
  hiddenAlertDialog?: Number
}

/**
 * 删除联系人参数
 */
type contactDeleteArg = {

  callback:
  /** 回调函数
   *@param e
   *@param data 1:成功 0：失败
   */
  (e: Event, data: String) => boolean | undefined,
  /**用户数据*/
  data?: Object,
  /**名称*/
  name: String,
}

/**
 * 查询联系人参数
 */
type contactSearchArg = {

  callback:
  /** 回调函数
   *@param e
   *@param data 1:成功 0：失败
   */
  (e: Event, data: String) => boolean | undefined,
  /**用户数据*/
  data?: Object,
  /**名称,传空字符串时,查询通讯录中所有联系人*/
  nameKey: String,
  /**一次最多返回的结果条数,默认为50条,-1表示一次返回所有结果*/
  pageSize?: Number
}
/**
 * 修改联系人参数
 */
type contactModifyArg = {

  callback:
  /** 回调函数
   *@param {Event} e
   *@param {String} data 1:成功 0：失败
   */
  (e: Event, data: String) => boolean | undefined,
  /**用户数据*/
  data: Object,
  /**名称*/
  name: String,
  /**电话号码*/
  num: String,
  /**邮件*/
  email: String,
}
interface RxmContact {
  /**
   * 打开联系人
   * @param arg  打开联系人参数
   */
  open(arg: contactOpenArg): void

  /**
   * 添加联系人
   * @param arg  添加联系人参数
   */

  addItem(arg: contactAddArg): void

  /**
   * 删除联系人
   * @param arg  删除联系人参数
   */
  deleteItem(arg: contactDeleteArg): void

  /**
   * 查询联系人
   * @param arg  查询联系人参数
   */
  searchItem(arg: contactSearchArg): void


  /**
   * 修改联系人
   * @param arg  修改联系人参数
   */
  searchItem(arg: contactModifyArg): void

}


