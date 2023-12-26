import React from 'react';
import "./Singupform.css";
const SingupForm = (props) => {
    return (props.trigger) ? (
        <div className='popup'>
              <div className='popup-inner'>
                  <button className='close-btn'>Close</button>
                   
                  { props.children }
              </div>
        </div>
    ) : " ";
};

export default SingupForm;