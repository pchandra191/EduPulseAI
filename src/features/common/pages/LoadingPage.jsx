import React from 'react';

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <div className="loading-container">
        <div className="spinner"></div>
        <h2>Loading...</h2>
        <p>Please wait while we prepare your content</p>
      </div>
    </div>
  );
};

export default LoadingPage;
