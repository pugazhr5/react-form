import React from 'react'
import FileUploader from '../file-uploader/FileUploader'

const ResumeForm = ({ errors, formData, handleBack, handleNext }) => {
  return (
    <div>
      <FileUploader
        id="cv"
        name="cv"
        error={errors['cv']}
        encodedFile={formData['cv']}
      />

      <div className="buttons-container">
        <button className="next" onClick={handleNext}>
          Next
        </button>

        <button className="back" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  )
}

export default ResumeForm
