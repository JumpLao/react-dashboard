import * as yup from 'yup'

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required().min(30)
})

export default validationSchema