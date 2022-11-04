import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'

const ButtonComponent = ({ text, icon }) => {
  return (
    <div className="btn btn-social">
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </div>
  );
}

export default ButtonComponent
