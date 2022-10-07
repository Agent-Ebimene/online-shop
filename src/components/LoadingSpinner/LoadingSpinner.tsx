import React from 'react';
import './LoadingSpinner.css';
import ClipLoader from 'react-spinners/ClipLoader';
const LoadingSpinner = () => {
  return (
    <div className='loading-spinner-container'>
      <ClipLoader color='#ffc80c' size={80} aria-label='Loading Spinner' />
    </div>
  );
};

export default LoadingSpinner;
