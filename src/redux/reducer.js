import { actions } from './actions'

// Initial app state
// const initialState = {
//   formData: {
//     first_name: '',
//     last_name: '',
//     email: '',
//     phone_number: '',
//     live_in_us: 'true',
//     git_profile: '',
//     about_you: '',
//     cv: '',
//     cover_letter: ''
//   },
//   fileData: {}
//   submitForm: {},
// }

const initialState = {
  formData: {
    first_name: 'Pugazh',
    last_name: 'R',
    email: 'p@r.com',
    phone_number: '0123456789',
    live_in_us: 'true',
    git_profile: 'https://github.com/a',
    about_you: "I'm a developer",
    cv: '',
    cover_letter: ''
  },
  fileData: {},
  submitForm: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_FORM_DATA:
      return { ...state, formData: { ...state.formData, ...action.payload } }

    case actions.UPDATE_FILE_DATA:
      return { ...state, fileData: { ...state.fileData, ...action.payload } }

    case actions.SUBMIT_FORM_INIT:
      return { ...state, submitForm: { loading: true } }
    case actions.SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        submitForm: { loading: false, status: 'success', data: action.payload }
      }
    case actions.SUBMIT_FORM_FAILURE:
      return {
        ...state,
        submitForm: { loading: false, status: 'error', data: action.payload }
      }

    default:
      return state
  }
}

export default reducer
