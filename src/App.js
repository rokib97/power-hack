import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./Auth/Login/Login";
import Registration from "./Auth/Registration/Registration";
import Header from "./components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/resgistration" element={<Registration />}></Route>
      </Routes>
    </>
  );
}

export default App;
