/**  
 * RxmControl插件
 * @see RxmControl插件,日期选择插件
 * @see RxmControl插件使用示例
 * ```
   //插件引用
   define(['RxmControl'],function(RxmControl){
      
   }
 * ```
 * @version  1.4.3 
 */

/**
 * 日期选择器参数
 */
type datePickerArg = {

    callback:
    /** 回调函数
     *@param e
     *@param data data.year,为选中的年份，data.month,选中的月份data.day,选中的日期

     */
    (e: Event, data: Object) => boolean | undefined,
    /**用户数据*/
    data?: Object,
    /**样式类型，默认1；1 显示年月日，0：显示年月*/
    withDay?: number,
    /**年 */
    year?: number,
    /**月*/
    month?: number,
    /**日*/
    day?: number,
    /**开始年*/
    startyear?: number,
    /** 结束年，开始年必须小于结束年，否则无效*/
    endyear?: number,
}

/**
 * 时间选择器参数
 */
type timePickerArg = {

    callback:
    /** 回调函数
     *@param e
     *@param data data. hour,为选中的小时，data. minute,选中的分钟
     */
    (e: Event, data: Object) => boolean | undefined,
    /**用户数据*/
    data?: Object,
    /**小时*/
    hour?: number,
    /**分 */
    minute?: number,
}
/**
 * 年月日时分选择器参数
 */
type dateAndTimePickerArg = {

    callback:
    /** 回调函数
     *@param e
     *@param data data.year,为选中的年份，
       data.month,选中的月份
       data.day,选中的日期
       data. hour,为选中的小时，
       data. min,选中的分钟

     */
    (e: Event, data: Object) => boolean | undefined,
    /**用户数据*/
    data?: Object,
    /**年*/
    year?: number,
    /**月*/
    month?: number,
    /**日*/
    day?: number,
    /**小时*/
    hour?: number,
    /**分 */
    minute?: number
}
/**
 * 时分秒选择器参数
 */
type timeAndSecondPickerArg = {

    callback:
    /** 回调函数
      *@param e
      *@param data data. hour,为选中的小时，data. minute,选中的分钟,data.second,选中的秒
      */
    (e: Event, data: Object) => boolean | undefined,
    /**用户数据*/
    data?: Object,
    /**小时*/
    hour?: number,
    /**分*/
    minute?: number,
    /**秒*/
    second?: number
}
interface RxmControl {
    /**
     * 打开日期选择器
     * @param arg  日期选择器参数
     */
    openDatePicker(arg: datePickerArg): void,

    /**
     * 打开时间选择器
     * @param arg  时间选择器参数
     */
    openTimePicker(arg: timePickerArg): void,

    /**
     * 打开年月日时分选择器
     * @param arg  年月日时分选择器参数
     */
    openDateAndTimePicker(arg: dateAndTimePickerArg): void,

    /**
     * 打开时间选择器（包含秒）
     * @param arg  时分秒选择器参数
     */
    openTimeAndSecondPicker(arg: timeAndSecondPickerArg): void,


}


