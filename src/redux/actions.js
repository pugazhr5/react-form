export const actions = {
  UPDATE_FORM_DATA: 'UPDATE_FORM_DATA',
  UPDATE_FILE_DATA: 'UPDATE_FILE_DATA',
  SUBMIT_FORM_INIT: 'SUBMIT_FORM_INIT',
  SUBMIT_FORM_SUCCESS: 'SUBMIT_FORM_SUCCESS',
  SUBMIT_FORM_FAILURE: 'SUBMIT_FORM_FAILURE'
}

// Save form data
export const updateFormData = (data) => {
  return (dispatch) =>
    dispatch({
      type: actions.UPDATE_FORM_DATA,
      payload: data
    })
}

// Save file meta data
export const updateFileData = (data) => {
  return (dispatch) =>
    dispatch({
      type: actions.UPDATE_FILE_DATA,
      payload: data
    })
}

// Submit form to API endpoint
export const submitForm = (params) => {
  return (dispatch) => {
    dispatch({ type: actions.SUBMIT_FORM_INIT })

    fetch('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      method: 'POST',
      body: JSON.stringify(params)
    })
      .then((response) => response.json())
      .then((parsedResponse) =>
        dispatch({
          type: actions.SUBMIT_FORM_SUCCESS,
          payload: parsedResponse
        })
      )
      .catch((error) =>
        dispatch({
          type: actions.SUBMIT_FORM_SUCCESS,
          payload: error
        })
      )
  }
}
