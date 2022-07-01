import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./Auth/Login/Login";
import Registration from "./Auth/Registration/Registration";
import RequireAuth from "./Auth/RequireAuth/RequireAuth";
import Layout from "./components/Layout/Layout";
import useAuth from "./Hooks/useAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
export const RequireContext = createContext(null);
function App() {
  const { auth, refetch, user } = useAuth();
  const [Total, setTotal] = useState(0);
  console.log(Total);
  return (
    <>
      <ToastContainer />
      <RequireContext.Provider value={{ auth, user, refetch, Total, setTotal }}>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/resgistration" element={<Registration />}></Route>
          </Routes>
        </Layout>
      </RequireContext.Provider>
    </>
  );
}

export default App;
