import React from 'react'
import { useDispatch } from 'react-redux'

import { updateFormData } from '../../redux/actions'

const TextArea = ({ name, error, ...rest }) => {
  const dispatch = useDispatch()
  const className = error ? 'error' : ''

  // Update redux on input change
  const handleInputChange = (fieldName) => (e) => {
    dispatch(updateFormData({ [fieldName]: e.target.value }))
  }

  return (
    <textarea
      name={name}
      className={className}
      onChange={handleInputChange(name)}
      {...rest}
    />
  )
}

export default TextArea
