const validationSchema = [
  {
    first_name: { required: true, type: 'string' },
    last_name: { type: 'string' },
    email: {
      required: true,
      type: 'string',
      format:
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
    },
    phone_number: {
      type: 'string',
      format: '^((([0-9]{3}))|([0-9]{3}))[-s.]?[0-9]{3}[-s.]?[0-9]{4}$'
    }
  },
  {
    live_in_us: { required: true, type: 'boolean' },
    git_profile: {
      required: true,
      type: 'string',
      format: '^(http(s?)://)?(www.)?github.([a-z])+/([A-Za-z0-9]{1,})+/?$'
    },
    about_you: { required: true, type: 'string' }
  },
  { cv: { required: true } },
  { cover_letter: {} }
]

/** Simple schema based form validation */
export const validateForm = (step, data) => {
  let errors = {}
  Object.entries(validationSchema[step]).forEach(([field, validations]) => {
    const value = data[field]

    if (!validations.required && !value) return

    if (validations.required === true && !value)
      return (errors[field] = 'required')

    if (
      validations.required === true &&
      typeof value === 'object' &&
      !value.size
    )
      return (errors[field] = 'required')

    if (validations.format && !value.match(validations.format))
      return (errors[field] = 'invalid format')
  })

  return errors
}
