/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 装饰boolean
 */

import {veriBoolean} from "../Validators/index";
import {setValidator} from "./index";

/**
 * int32装饰器
 *
 * @param {string} errMsg - 错误提示
 * @param {string} require - 是否必要，默认为否
 * @returns {(target, key) => {}}
 */
export function decoBoolean(errMsg: string = null,require: boolean = false) {
  return function (target: object, key: string) {
    setValidator.call(this, target, key, require, errMsg, veriBoolean);

    return;
  }
}

