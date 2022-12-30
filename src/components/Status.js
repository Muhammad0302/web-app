import React from 'react'
import './status.css'
import PropTypes from 'prop-types'

function Status({ status, name }) {
  return (
    <>
      <td>{name}</td>
      <td>
        <div
          className="circle-color"
          style={{
            backgroundColor: status ? 'red' : 'green',
            width: '40px',
            height: '40px',
            borderRadius: '100px',
            border: '1px solid black'
          }}
        />
      </td>
    </>
  )
}

export default Status

Status.propTypes = {

  name: PropTypes.string,
  status: PropTypes.bool
}

Status.defaultProps = {
  name: 'Sensor N',
  status: true
}
