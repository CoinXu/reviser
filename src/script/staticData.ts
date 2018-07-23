/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 静态变量
 */
import {
  veriInt32,
  veriInt64,
  veriDouble,
  veriFloat,
  veriStruct,
  veriString,
  veriUnInt32,
  veriUnInt64,
  veriBoolean,
  veriEmail,
  veriPhone,
} from "../impl/Validators/index";

export const D_NAME = "_validator_";
export const CLASS_TYPE = "_class_";
/*
 * 错误类型
 */
export const ERROR_TYPE = {
  TYPE_ERROR: "type error",
  SIZE_ERROR: "size error",
  REQUIRE_ERROR: "require error",
  LENGTH_MIN_ERRO: "length less than min",
  LENGTH_MAX_ERRO: "length more than max",
};
/*
 * 参数类型
 */
export const VERI_TYPE = {
  INT32: veriInt32,
  INT64: veriInt64,
  DOUBLE: veriDouble,
  FLOAT: veriFloat,
  STRING: veriStruct,
  STRUCT: veriString,
  UNINT32: veriUnInt32,
  UNINT64: veriUnInt64,
  BOOLEAN: veriBoolean,
  EMAIL: veriEmail,
  PHONE: veriPhone
};
