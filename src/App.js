import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./Auth/Login/Login";
import Registration from "./Auth/Registration/Registration";
import Layout from "./components/Layout/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
function App() {
  return (
    <>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/resgistration" element={<Registration />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
