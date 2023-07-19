import React, { useEffect, useState } from "react";
import "./Links.css";

const Links: React.FC = () => {
  const [blinked, setBlinked] = useState(false);

  useEffect(() => {
    const blinkLinks = async () => {
      setBlinked(true);
      await sleep(2000); // blink(ms)
      setBlinked(false);
    };

    blinkLinks();
  }, []);

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div className={`links-container ${blinked ? "blinked" : ""}`}>
      <div className="links">HEAR</div>
      <div className="links">LATEST</div>
      <div className="links">TOUR</div>
      <div className="links">SEE</div>
      <div className="links">SHOP</div>
      <div className="links">WATCH</div>
      <div className="links">PERSONAL</div>
      <div className="links">AID</div>
    </div>
  );
};

export default Links;
