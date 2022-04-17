import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CoverLetterForm from './CoverLetterForm'
import ResumeForm from './ResumeForm'
import PersonalInfoForm from './PersonalInfoForm'
import AdditionalInfoForm from './AdditionalInfoForm'
import { submitForm } from '../../redux/actions'
import { validateForm } from '../../utils/formValidator'

/** Render form fields based on current step */
const FormforCurrentStep = ({ step, errors, formData }) => {
  switch (step) {
    case 0:
      return <PersonalInfoForm errors={errors} formData={formData} />
    case 1:
      return <AdditionalInfoForm errors={errors} formData={formData} />
    case 2:
      return <ResumeForm errors={errors} />
    default:
      return <CoverLetterForm errors={errors} />
  }
}

const Form = () => {
  const dispatch = useDispatch()
  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState({})
  const formRef = useRef()
  const [formDataForAPI, setFormDataForAPI] = useState([{}, {}, {}, {}])
  const { loading, status } = useSelector((state) => ({
    loading: state.submitForm.loading,
    status: state.submitForm.status
  }))

  // Title for each step
  const formTitles = [
    'Personal Info',
    'Additional Info',
    'Resume',
    'Cover Letter'
  ]

  const isFirstStep = step === 0
  const isLastStep = step === formTitles.length - 1
  const submitButtonText = isLastStep
    ? loading
      ? 'Submitting...'
      : 'Submit'
    : 'Next'

  // Go to previous step
  const handleBack = (e) => {
    e.preventDefault()
    setStep((currentStep) => currentStep - 1)
  }

  // Go to next step
  const handleNext = (e) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(formRef.current).entries())
    const validationErrors = validateForm(step, data)
    setErrors(validationErrors)

    // Prevent next step incase of any validation errors
    if (Object.keys(validationErrors).length) return

    let updatedFormData = [...formDataForAPI]
    updatedFormData[step] = data

    if (isLastStep) {
      return dispatch(submitForm(updatedFormData))
    }
    console.log(updatedFormData)
    setFormDataForAPI(updatedFormData)
    setStep((currentStep) => currentStep + 1)
  }

  return (
    <div className="form-container">
      {status ? (
        status === 'success' ? (
          <div className="form-status-container">
            <div>Your form submitted successfully!</div>
          </div>
        ) : (
          <div className="form-status-container error">
            <div>Something went wrong please try again later!</div>
          </div>
        )
      ) : (
        <div className="form-content-container">
          <h2 className="form-title">{formTitles[step]}</h2>

          <form name="form" ref={formRef}>
            <FormforCurrentStep
              step={step}
              errors={errors}
              formData={formDataForAPI[step]}
            />

            <div className="buttons-container">
              <button className="next" onClick={handleNext}>
                {submitButtonText}
              </button>

              {!isFirstStep && (
                <button className="back" onClick={handleBack}>
                  Back
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default Form
