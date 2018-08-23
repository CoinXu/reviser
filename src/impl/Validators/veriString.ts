/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description string验证器
 */

import {ERROR_TYPE} from "@/constants";
import {IVeri} from "../../inter/decorator";

/**
 * string类型验证
 *
 * @param {string} key - 键值
 * @param {any} value - 值
 * @returns {IVeri}
 */
export function veriString(key: string, value: any):IVeri {
  if(typeof value !== "string"){
    //验证是否为number
    return {
      value: false,
      error: ERROR_TYPE.TYPE_ERROR
    };
  }else{
    //条件满足
    return {
      value: true
    };
  }
}
