import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CoverLetterForm from './CoverLetterForm'
import ResumeForm from './ResumeForm'
import PersonalInfoForm from './PersonalInfoForm'
import AdditionalInfoForm from './AdditionalInfoForm'
import { submitForm } from '../../redux/actions'
import { validateForm } from '../../utils/formValidator'
import Status from './Status'

/** Render form fields based on current step */
const FormforCurrentStep = ({
  step,
  formData,
  errors,
  handleBack,
  handleNext
}) => {
  switch (step) {
    case 0:
      return (
        <PersonalInfoForm
          formData={formData}
          errors={errors}
          handleNext={handleNext}
        />
      )
    case 1:
      return (
        <AdditionalInfoForm
          formData={formData}
          errors={errors}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      )
    case 2:
      return (
        <ResumeForm
          formData={formData}
          errors={errors}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      )
    case 3:
      return (
        <CoverLetterForm
          formData={formData}
          errors={errors}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      )
    default:
      return <Status />
  }
}

const Form = () => {
  const dispatch = useDispatch()
  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState({})
  const status = useSelector((state) => state.submitForm.status)
  const loading = useSelector((state) => state.submitForm.loading)
  const formData = useSelector((state) => state.formData)

  // Title for each step
  const formTitles = [
    'Personal Info',
    'Additional Info',
    'Resume',
    'Cover Letter'
  ]

  // Go to previous step
  const handleBack = (e) => {
    e.preventDefault()
    setStep((currentStep) => currentStep - 1)
  }

  // Go to next step
  const handleNext = (e) => {
    e.preventDefault()

    const validationErrors = validateForm(step, formData)
    setErrors(validationErrors)

    // Prevent Next step if any validation errors
    if (Object.keys(validationErrors).length) return

    if (step === formTitles.length - 1) dispatch(submitForm(formData))

    setStep((currentStep) => currentStep + 1)
  }

  return (
    <div className="form-container">
      {status || loading ? (
        <Status status={status} loading={loading} />
      ) : (
        <div className="form-content-container">
          <h2 className="form-title">{formTitles[step]}</h2>

          <form name="form">
            <FormforCurrentStep
              step={step}
              formData={formData}
              errors={errors}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </form>
        </div>
      )}
    </div>
  )
}

export default Form
