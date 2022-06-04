import "./App.css";
import Logo from "./components/Logo/Logo";
import Link from "./components/Links/Link";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <div className="navbar">
        <div>
          <Logo />
        </div>
        <div>
          <Link />
        </div>
        <div>
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
