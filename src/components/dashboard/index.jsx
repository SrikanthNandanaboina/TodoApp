import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "./navbar";
import Cards from "./cards";
import AddOrSearchTask from "./addOrSearchTask";
import TasksList from "./tasksList";
import AddOrEditItem from "./addOrEditItem";
import NoTasks from "./noTasks";

const Dashboard = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const { history } = props;
    const token = localStorage.getItem("token");
    if (!token) history.push("/");
  });

  const [showPopUp, setPopUp] = useState(false);
  const [popUpType, setpopUpType] = useState(null);

  const setAddorEdit = (status, type) => {
    setpopUpType(type);
    setPopUp(status);
  };

  const togglePopUp = (data) => {
    console.log(data);
  };

  return (
    <>
      {showPopUp && (
        <AddOrEditItem
          popUpType={popUpType}
          setAddorEdit={setAddorEdit}
          togglePopUp={togglePopUp}
        />
      )}
      <NavBar props={props} />
      {tasks.length ? (
        <>
          <Cards />
          <AddOrSearchTask setAddorEdit={setAddorEdit} />
          <TasksList setAddorEdit={setAddorEdit} />
        </>
      ) : (
        <NoTasks setAddorEdit={setAddorEdit} />
      )}
    </>
  );
};

export default withRouter(Dashboard);
