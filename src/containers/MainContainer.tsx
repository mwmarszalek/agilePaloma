import "typeface-anton";
import "./App.css";
import Logo from "../components/Logo";
import Links from "../components/Links";

function MainContainer() {
  return (
    <div style={{ margin: "0" }}>
      <div className="main-container">
        <Logo />
        <div className="links-section-container">
          <div></div>
          <Links />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;