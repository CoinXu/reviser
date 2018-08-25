/**
 * @date 2018-08-25
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PrimitiveTypes, getPrimitiveType } from "@/impl/utils";
import { PropertyDecorator, ValidatorDecoratorReturns } from "@inter/decorator";

function MinLength(length: number, message?: string): PropertyDecorator {
  function decorator(target: any, key: string, value: any): ValidatorDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    // string
    if (type !== PrimitiveTypes.String) {
      return message || `expected a String but got ${type}`;
    }

    if (value.length < length) {
      return message || `length of ${key} must great than ${length}`;
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default MinLength;
