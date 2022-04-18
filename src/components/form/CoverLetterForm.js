import React from 'react'
import FileUploader from '../file-uploader/FileUploader'

const CoverLetterForm = ({ errors, formData, handleBack, handleNext }) => {
  return (
    <div>
      <FileUploader
        id="cover_letter"
        name="cover_letter"
        error={errors['cover_letter']}
        encodedFile={formData['cover_letter']}
      />

      <div className="buttons-container">
        <button className="next" onClick={handleNext}>
          Submit
        </button>

        <button className="back" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  )
}

export default CoverLetterForm
