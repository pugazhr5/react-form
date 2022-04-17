import React, { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { FaFilePdf, FaTrash } from 'react-icons/fa'

const FileUploader = ({ name, id }) => {
  const [file, setFile] = useState()
  const [showError, setShowError] = useState(false)

  // Choose a file
  const readFile = (e) => {
    setShowError(false)
    setFile(null)

    const selectedFile = e.target.files[0]
    if (!selectedFile) return

    if (selectedFile.size > 512000) return setShowError(true)

    setFile(selectedFile)
  }

  // Clear selected file
  const clearSelectedFile = (e) => {
    setFile(null)
  }

  return (
    <div className="file-uploader">
      <input
        type="file"
        name={name}
        id={id}
        onChange={readFile}
        accept="application/pdf"
      />

      {!file && (
        <label htmlFor={id} className="uploader">
          <FaCloudUploadAlt className="icon" />
          <label htmlFor={id}>Browse file</label>
          {showError && (
            <div className="file-size-error">
              File size should be less than 500kb
            </div>
          )}
        </label>
      )}

      {file && (
        <div className="file-details">
          <FaFilePdf className="icon" />
          <div>
            <div className="file-name">{file.name}</div>
            <div className="file-size">{(file.size / 1024).toFixed(2)} kb</div>
          </div>
          <FaTrash className="trash-icon" onClick={clearSelectedFile} />
        </div>
      )}
    </div>
  )
}

export default FileUploader
