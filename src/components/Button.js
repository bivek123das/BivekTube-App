import React from 'react';
import '../utils/buttonlist.css';

const Button = ({name}) => {
  return (
    <div className='btn-container'>
             <button className='btn-list px-4 py-2 m-3  shadow-black shadow-2xl rounded-xl '>{name}</button>
    </div>
  )
}

export default Button;
