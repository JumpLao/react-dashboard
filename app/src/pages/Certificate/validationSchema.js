import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required()
})

export default validationSchema