import React, { useEffect, useState } from 'react';
import './Links.css';

const Links: React.FC = () => {
  const [blinked, setBlinked] = useState(false);

  useEffect(() => {
    const blinkLinks = async () => {
      setBlinked(true);
      await sleep(2000); // Adjust the duration of the blink (in milliseconds)
      setBlinked(false);
    };

    blinkLinks();
  }, []);

  const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  return (
    <div className={`links-container ${blinked ? 'blinked' : ''}`}>
      <a href="#" className="links">HEAR</a>
      <a href="#" className="links">LATEST</a>
      <a href="#" className="links">TOUR</a>
      <a href="#" className="links">SEE</a>
      <a href="#" className="links">SHOP</a>
      <a href="#" className="links">WATCH</a>
      <a href="#" className="links">PERSONAL</a>
      <a href="#" className="links">AID</a>
    </div>
  );
};

export default Links;
