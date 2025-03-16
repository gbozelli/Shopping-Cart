import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  

  return(
    <>
      <NavBar/>
      <Outlet />
    </>
  )

}

export default App;