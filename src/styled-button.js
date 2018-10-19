import './styled-button.css';
import React from 'react';

export const StyledButton = ({ children, onClick, style }) => {
  return (
    <div style={style}>
      <button className="search-button" onClick={onClick} style={style}>
        {children}
      </button>
    </div>
  );
};
