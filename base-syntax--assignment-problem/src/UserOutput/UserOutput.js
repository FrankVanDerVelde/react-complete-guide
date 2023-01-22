import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div>
      <p className="UserOutput">Username: {props.userName}</p>
      <p>Test P2</p>
    </div>
  )
}

export default userOutput;