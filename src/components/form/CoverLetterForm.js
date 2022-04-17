import React from 'react'
import FileUploader from '../file-uploader/FileUploader'

const CoverLetterForm = ({ errors }) => {
  return (
    <div>
      <FileUploader
        id="cover_letter"
        name="cover_letter"
        error={errors.cover_letter}
      />
    </div>
  )
}

export default CoverLetterForm
