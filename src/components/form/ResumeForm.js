import React from 'react'
import FileUploader from '../file-uploader/FileUploader'

const ResumeForm = ({ errors }) => {
  return (
    <div>
      <FileUploader id="cv" name="cv" error={errors.cv} />
    </div>
  )
}

export default ResumeForm
