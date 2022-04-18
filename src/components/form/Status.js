import React from 'react'

const Status = ({ status, loading }) => {
  const className = `form-status-container ${status}`

  return (
    <>
      {loading ? (
        <div className="form-status-container">Please wait...</div>
      ) : (
        <div className={className}>
          {status === 'success'
            ? 'Your form submitted successfully!'
            : 'Something went wrong please try again later!'}
        </div>
      )}
    </>
  )
}

export default Status
