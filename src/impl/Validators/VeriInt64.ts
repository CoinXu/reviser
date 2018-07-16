import {__ERROR_TYPE__} from "../../script/StaticData";
import {IVeri} from "../../inter/decorator";

export function VeriInt64(key: string, value: any):IVeri {
  if(typeof value !== "number"){
    //验证是否为number
    return {
      value: false,
      error: {error: __ERROR_TYPE__.type_error, key: key}
    };
  }else{
    if(value > 9223372036854775807 || value < -9223372036854775808){
      //验证是否超过int64范围
      return {
        value: false,
        error: {error: __ERROR_TYPE__.size_error, key: key}
      };
    }else{
      if(value % 1 !== 0){
        //存在小数
        return {
          value: false,
          error: {error: __ERROR_TYPE__.type_error, key: key}
        };
      }else {
        //条件满足
        return {
          value: true
        };
      }
    }
  }
}