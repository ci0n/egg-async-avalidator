import AsyncValidator, { Rules, ValidateSource, ValidateOption, ErrorList, FieldErrorList } from "async-validator"

declare module 'egg' {
  interface Application {
    avalidator: (rule: Rules) => AsyncValidator
  }

  interface Context {
    avalidate: (
      rule: Rules,
      source?: ValidateSource,
      options?: ValidateOption,
      callback?: (errors: ErrorList, fields: FieldErrorList) => void) => Promise<void>
  }

  interface EggAppConfig {
    asyncvalidator: {
      
    }
  }
}
