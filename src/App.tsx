import "./App.css";
import { Link } from "react-router";

function App() {
  console.log("Rendering App");

  return (
    <>
      <h1>Hello, App!</h1>
      <Link to="/my-button">My Button</Link>
      <br />
      <Link to="/sidebar">Sidebar</Link>
    </>
  );
}

export default App;
