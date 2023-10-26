// component and function import
import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'

export default {
  // app argument is a reference to the vue application
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minValue)
    defineRule('max_value', maxValue)
    defineRule('password_mismatch', confirmed)
    defineRule('excluded', excluded)
    defineRule('countryExcluded', excluded)

    configure({
      generateMessage: (contextMessage) => {
        const messages = {
          required: `the field ${contextMessage.field} is required.`,
          min: `The field ${contextMessage.field}is too short.`,
          max: `The field ${contextMessage.field} is too long.`,
          alpha_spaces: `The field ${contextMessage.field} may only contain alphabetic characters and spaces.`,
          email: `The field ${contextMessage.field} must be a valid email`,
          min_value: `The field ${contextMessage.field} is too low`,
          max_value: `The field ${contextMessage} is too high.`,
          excluded: `You are not allowed to use this value for the field ${contextMessage.field}`,
          countryExcluded: `Due to restrctions, we do not accept users from this locaion`,
          password_mismatch: "The passwords don't match.",
          tos: `You must accept the Terms of Service`
        }
        const message = messages[contextMessage.rule.name]
          ? messages[contextMessage.rule.name]
          : `The field ${contextMessage.field} is invalid.`
        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
    // app.component(name:string)
  }
}
