import { useEffect, useState } from "react";

import "./App.css";
import Login from "./Component/Auth/Login";
import EmployeeDashboard from "./Component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Component/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/Localstorage";

function App() {
  // useEffect(() => {
  //   setLocalStorage();
  // });

  const [user, setuser] = useState(null);

  const handelLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      console.log("Admin logged in");
    } else if ((email = "user@me.com" && password == "123")) {
      console.log(" User logged in ");
    } else {
      alert("Invalid credentials");
    }
  };
    // const employees = getLocalStorage('employee')
    // const admins = getLocalStorage('admin')
    handelLogin(email, password);
    return (
      <>
        {!user ? <Login handelLogin={handelLogin} /> : ""}
        {/* <EmployeeDashboard /> */}
        {/* <AdminDashboard /> */}
      </>
    );
  };

export default App;
