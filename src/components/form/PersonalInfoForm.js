import React, { useEffect } from 'react'

const PersonalInfoForm = ({ errors, formData }) => {
  // Remove error highlighting on input change
  const removeError = (e) => {
    e.target.classList.remove('error')
  }

  // Highlight fields with validation errors
  useEffect(() => {
    Object.keys(errors).forEach((field) => {
      document.getElementById(field).classList.add('error')
    })
  }, [errors])

  // Persist form data
  useEffect(() => {
    Object.keys(formData).forEach((field) => {
      document.getElementById(field).value = formData[field]
    })
  }, [formData])

  return (
    <>
      <div className="form-field">
        <label htmlFor="first_name">First name</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          onChange={removeError}
        />
      </div>

      <div className="form-field">
        <label htmlFor="last_name">Last name</label>
        <input type="text" name="last_name" id="last_name" />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={removeError} />
      </div>

      <div className="form-field">
        <label htmlFor="phone_number">Phone number</label>
        <input type="tel" name="phone_number" id="phone_number" />
      </div>
    </>
  )
}

export default PersonalInfoForm
