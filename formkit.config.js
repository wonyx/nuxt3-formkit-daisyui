import { ja } from '@formkit/i18n'
import { defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'

const textClassification = {
  input: `
  $reset
   input 
   input-bordered
   w-full 
   max-w-xs
   focus-within:input-info
   formkit-invalid:input-error
   formkit-invalid:border-red-500
  `,
  label: 'font-bold text-sm formkit-invalid:text-red-500'
}
const buttonClassification = {
  input: '$reset btn btn-info'
}

const theme = {
  // the global key will apply to all inputs
  global: {
    help: 'text-xs text-gray-500',
    message: '$reset text-error text-xs',
    label: '$reset ml-2 label-text'
  },
  button: buttonClassification,
  date: textClassification,
  'datetime-local': textClassification,
  checkbox: {
    input: '$reset checkbox checkbox-accent',
    inner: '$reset inline',
    wrapper: '$reset cursor-pointer label  justify-start'
  },
  email: textClassification,
  month: textClassification,
  number: textClassification,
  password: textClassification,
  radio: {
    input: '$reset radio radio-accent',
    inner: '$reset inline',
    wrapper: '$reset cursor-pointer label justify-start'
  },
  range: {
    input: '$reset range range-secondary'
  },
  search: textClassification,
  select: textClassification,
  submit: buttonClassification,
  tel: textClassification,
  text: textClassification,
  textarea: {
    input: `
    $reset
    textarea
    input-bordered
    focus-within:input-info
    formkit-invalid:input-error
    `
  },
  time: textClassification,
  url: textClassification,
  week: textClassification
}

export default defaultConfig({
  locales: { ja },
  locale: 'ja',
  config: {
    classes: generateClasses(theme)
  }
})
