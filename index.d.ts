import AsyncValidator, { Rules, ValidateSource, ValidateOption, ErrorList, FieldErrorList } from "async-validator"

type Callback = (errors: ErrorList, fields: FieldErrorList) => void

declare module 'egg' {
  interface Application {
    avalidator: (rule: Rules) => AsyncValidator
  }

  interface Context {
    avalidate: (
      this: Context,
      rule: Rules,
      source?: ValidateSource | Callback,
      options?: ValidateOption | Callback,
      callback?: Callback) => Promise<void>
  }

  interface EggAppConfig {
    asyncvalidator: {
      
    }
  }
}
