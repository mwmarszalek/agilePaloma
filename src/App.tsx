import "typeface-anton";
import "./App.css";
import Logo from "./components/Logo";
import Links from "./components/Links";

function App() {
  return (
    <div style={{ margin: "0" }}>
      <div className="main-container">
        <Logo />
        <Links />
      </div>
    </div>
  );
}

export default App;
