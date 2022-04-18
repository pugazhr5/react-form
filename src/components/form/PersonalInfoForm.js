import React from 'react'

import Input from '../common/Input'

const PersonalInfoForm = ({ errors, formData, handleNext }) => {
  return (
    <>
      <div className="form-field">
        <label htmlFor="first_name">First name</label>
        <Input
          type="text"
          name="first_name"
          id="first_name"
          value={formData['first_name']}
          error={errors['first_name']}
        />
      </div>

      <div className="form-field">
        <label htmlFor="last_name">Last name</label>
        <Input
          type="text"
          name="last_name"
          id="last_name"
          value={formData['last_name']}
          error={errors['last_name']}
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          name="email"
          id="email"
          value={formData['email']}
          error={errors['email']}
        />
      </div>

      <div className="form-field">
        <label htmlFor="phone_number">Phone number</label>
        <Input
          type="tel"
          name="phone_number"
          id="phone_number"
          value={formData['phone_number']}
          error={errors['phone_number']}
        />
      </div>

      <div className="buttons-container">
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  )
}

export default PersonalInfoForm
