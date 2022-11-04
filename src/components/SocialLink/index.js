import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'

const SocialLink = ({ icon }) => {
  return (
    <li className="btn btn-social--link">
      <FontAwesomeIcon icon={icon} />
    </li>
  );
}

export default SocialLink
