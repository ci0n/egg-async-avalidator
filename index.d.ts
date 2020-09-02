import AsyncValidator, { Rules, ValidateSource, ValidateOption, ErrorList, FieldErrorList, RuleItem, RuleType } from "async-validator"

type Callback = (errors: ErrorList, fields: FieldErrorList) => void

export interface IRuleItem extends RuleItem {
  message?: string | any; // not only a 'string', it can be 'any'.
}
export interface IRules extends Rules {
  [field: string]: IRuleItem | IRuleItem[];
  type?: RuleType | string | any; // fix weak type error
}


declare module 'egg' {
  interface Application {
    avalidator: (rule: IRules) => AsyncValidator
  }

  interface Context {
    avalidate: (
      this: Context,
      rule: IRules,
      source?: ValidateSource | Callback,
      options?: ValidateOption | Callback,
      callback?: Callback) => Promise<void>
  }

  interface EggAppConfig {
    asyncvalidator: {
      
    }
  }
}
