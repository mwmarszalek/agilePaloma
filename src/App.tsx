import "typeface-anton";
import "./index.css";
import PalomaBackground from "./assets/palomaBckgnd.png";
import Logo from "./components/Logo";
import Links from "./components/Links";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${PalomaBackground})`,
        backgroundSize: "90% auto",
        backgroundPosition: "-50% center",
        height: '100vh',
        display: "flex",
        justifyContent: 'space-between',
        overflow: "hidden",
      }}
    >
      <Logo />
      <Links />
    </div>
  );
}

export default App;
