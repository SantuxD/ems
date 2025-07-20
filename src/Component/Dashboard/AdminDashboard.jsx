import React from "react";
import Header from "../others/Header";
import CreateTsk from "../others/CreateTsk";
import AllTask from "../others/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-screen p-7">
      <Header />
      <CreateTsk />
      <AllTask />
     
    </div>
  );
};

export default AdminDashboard;
