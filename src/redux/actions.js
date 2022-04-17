export const actions = {
  SUBMIT_FORM_INIT: 'SUBMIT_FORM_INIT',
  SUBMIT_FORM_SUCCESS: 'SUBMIT_FORM_SUCCESS',
  SUBMIT_FORM_FAILURE: 'SUBMIT_FORM_FAILURE'
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
