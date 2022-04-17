import { actions } from './actions'

// Initial app state
const initialState = {
  submitForm: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SUBMIT_FORM_INIT:
      return { ...state, submitForm: { loading: true } }
    case actions.SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        submitForm: { loading: true, status: 'success', data: action.payload }
      }
    case actions.SUBMIT_FORM_FAILURE:
      return {
        ...state,
        submitForm: { loading: true, status: 'error', data: action.payload }
      }

    default:
      return state
  }
}

export default reducer
