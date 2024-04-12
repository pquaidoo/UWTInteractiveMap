import React from 'react';

function Button({ label, onClick }) {
  return <button 
  onClick={onClick} 
  style={{
    padding: '10px 20px', // Adjust padding as needed
    margin: '5px', // Adjust margin as needed
    fontSize: '16px', // Adjust font size as needed
    borderRadius: '5px', // Adjust border radius as needed
    backgroundColor: 'blue', // Adjust background color as needed
    color: 'white', // Adjust text color as needed
    border: 'none', // Remove border
    cursor: 'pointer', // Show pointer cursor on hover
  }}
  >
    {label} 
  </button>;
}

export default Button;
