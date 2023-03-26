import React from 'react'
import './status.css'
import PropTypes from 'prop-types'
import parking from '../assets/parking.svg'
import emptyParking from '../assets/emptyParking.png'

function Status({ status, name }) {
  return status ? (
    <div className="icon">
      <img src={parking} alt="parking car picturee" width={500} height={540} />
    </div>
  ) : (
    <div className="icon">
      <img
        src={emptyParking}
        alt="parking car picturee"
        width={500}
        height={540}
      />
    </div>
  );
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
