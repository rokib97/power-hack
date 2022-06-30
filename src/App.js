import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <ToastContainer />
    </>
  );
}

export default App;
