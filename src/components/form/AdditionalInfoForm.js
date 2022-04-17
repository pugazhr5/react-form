import React, { useEffect } from 'react'

const AdditionalInfoForm = ({ errors, formData }) => {
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
      const element = document.getElementById(field)
      if (element) return (element.value = formData[field])

      document.getElementById(`live_in_us_${formData[field]}`).checked = true
    })
  }, [formData])

  return (
    <>
      <div className="form-field">
        <label>Do you live in the US?</label>
        <div className="radio-button-container">
          <div>
            <input
              type="radio"
              id="live_in_us_true"
              name="live_in_us"
              value="true"
              checked
              onChange={() => {}}
            />
            <label htmlFor="live_in_us_true">Yes</label>
          </div>

          <div>
            <input
              type="radio"
              id="live_in_us_false"
              name="live_in_us"
              value="false"
              onChange={() => {}}
            />
            <label htmlFor="live_in_us_false">No</label>
          </div>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="git_profile">Git profile</label>
        <input
          type="url"
          name="git_profile"
          id="git_profile"
          onChange={removeError}
        />
      </div>

      <div className="form-field">
        <label htmlFor="about_you">About you</label>
        <textarea
          type="text"
          rows={5}
          name="about_you"
          id="about_you"
          onChange={removeError}
        />
      </div>
    </>
  )
}

export default AdditionalInfoForm
