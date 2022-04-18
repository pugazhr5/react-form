import React from 'react'
import { useDispatch } from 'react-redux'

import { updateFormData } from '../../redux/actions'

/** Input component that handles validation and highlight validation errors */
const Input = ({ name, error, ...rest }) => {
  const dispatch = useDispatch()
  const className = error ? 'error' : ''

  // Update redux on input change
  const handleInputChange = (fieldName) => (e) => {
    dispatch(updateFormData({ [fieldName]: e.target.value }))
  }

  return (
    <input
      name={name}
      className={className}
      onChange={handleInputChange(name)}
      {...rest}
    />
  )
}

export default Input
