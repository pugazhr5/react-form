import React from 'react'

import Input from '../common/Input'
import TextArea from '../common/TextArea'

const AdditionalInfoForm = ({ errors, formData, handleBack, handleNext }) => {
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
        <Input
          type="url"
          name="git_profile"
          id="git_profile"
          value={formData['git_profile']}
          error={errors['git_profile']}
        />
      </div>

      <div className="form-field">
        <label htmlFor="about_you">About you</label>
        <TextArea
          rows={5}
          name="about_you"
          id="about_you"
          value={formData['about_you']}
          error={errors['about_you']}
        />
      </div>

      <div className="buttons-container">
        <button className="next" onClick={handleNext}>
          Next
        </button>

        <button className="back" onClick={handleBack}>
          Back
        </button>
      </div>
    </>
  )
}

export default AdditionalInfoForm
