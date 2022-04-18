import React, { useEffect, useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { FaFilePdf, FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

import { fileToBase64 } from '../../utils/helpers'
import { updateFormData, updateFileData } from '../../redux/actions'

const FileUploader = ({ error, name, id, encodedFile }) => {
  const [fileDetails, setFileDetails] = useState()
  const [showError, setShowError] = useState(false)
  const dispatch = useDispatch()
  const className = error ? 'uploader error' : 'uploader'
  const fileMetaData = useSelector((state) => state.fileData[name])

  /** Encode file to Base64 & dispatch to redux */
  const encodeAndDispatch = async (file) => {
    try {
      const result = await fileToBase64(file)
      dispatch(updateFormData({ [name]: result }))
      dispatch(
        updateFileData({
          [name]: {
            name: file.name,
            size: file.size
          }
        })
      )
    } catch (error) {
      return
    }
  }

  // Choose a file
  const readFile = (e) => {
    setShowError(false)
    setFileDetails(null)

    const selectedFile = e.target.files[0]
    if (!selectedFile) return

    if (selectedFile.size > 512000) return setShowError(true)

    encodeAndDispatch(selectedFile)
  }

  // Clear selected file
  const clearSelectedFile = (e) => {
    setFileDetails(null)
    dispatch(updateFormData({ [name]: '' }))
    dispatch(updateFileData({ [name]: null }))
  }

  // Persist file meta data name & size
  useEffect(() => {
    setFileDetails(fileMetaData)
  }, [fileMetaData])

  return (
    <div className="file-uploader">
      <input
        type="file"
        name={name}
        id={id}
        onChange={readFile}
        accept="application/pdf"
      />

      {!fileDetails && (
        <label htmlFor={id} className={className}>
          <FaCloudUploadAlt className="icon" />
          <label htmlFor={id}>Browse file</label>
          {showError && (
            <div className="file-size-error">
              File size should be less than 500kb
            </div>
          )}
        </label>
      )}

      {fileDetails && (
        <div className="file-details">
          <FaFilePdf className="icon" />
          <div>
            <div className="file-name">{fileDetails.name}</div>
            <div className="file-size">
              {(fileDetails.size / 1024).toFixed(2)} kb
            </div>
          </div>
          <FaTrash className="trash-icon" onClick={clearSelectedFile} />
        </div>
      )}
    </div>
  )
}

export default FileUploader
