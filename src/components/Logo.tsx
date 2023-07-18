import React from 'react';
import P from '../assets/P.png';
import A from '../assets/A.png';
import L from '../assets/L.png';
import O from '../assets/O.png';
import M from '../assets/M.png';

const Logo: React.FC = () => {
  
  const letterStyle: React.CSSProperties = {
    width: '9rem',
    height: '15rem',
    marginLeft: '1em',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column-reverse',
      }}
    >
      <img src={P} alt="P" style={letterStyle} />
      <img src={A} alt="A" style={letterStyle} />
      <img src={L} alt="L" style={letterStyle} />
      <img src={O} alt="O" style={letterStyle} />
      <img src={M} alt="M" style={letterStyle} />
      <img src={A} alt="A" style={letterStyle} />
    </div>
  );
};

export default Logo;
