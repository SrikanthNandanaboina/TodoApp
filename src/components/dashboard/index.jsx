import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "./navbar";
import Cards from "./cards";
import AddOrSearchTask from "./addOrSearchTask";
import TasksList from "./tasksList";
import AddOrEditItem from "./addOrEditItem";
import NoTasks from "./noTasks";
import TasksController from "../../utilities/tasksController";

const Dashboard = (props) => {
  const [tasks, setTasks] = useState([]);
  const [tasksInfo, setTasksInfo] = useState({ completed: 0, pending: 0 });
  const [latestTasks, setLatestTasks] = useState([]);
  const [showPopUp, setPopUp] = useState(false);
  const [popUpType, setpopUpType] = useState(null);
  const [searchText, setSearchText] = useState("");
  const { history } = props;
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) history.push("/");
    getTasks(token);
  }, []);

  const getTasks = async (token) => {
    const { err, data } = await TasksController.dashboard(token);
    if (!err) {
      setData(data.tasks);
    }
  };

  const setData = (data) => {
    const totalTasks = data.length;
    const completed = data.filter((ele) => ele.completed === 1).length;
    const latestTasks = data.slice(-3);
    setTasksInfo({
      completed: completed,
      pending: totalTasks - completed,
    });
    setLatestTasks(latestTasks);
    setTasks(data);
  };

  const setAddorEdit = (status, type) => {
    setPopUp(status);
    setpopUpType(type);
  };

  const togglePopUp = async (data) => {
    let response;
    let stateTasks = [...tasks];
    if (data.type === "Add") {
      response = await TasksController.addTask({ title: data.taskName }, token);
    } else {
      response = await TasksController.editTask(
        data.id,
        { title: data.taskName, status: popUpType.completed },
        token
      );
    }
    if (!response.err) {
      if (data.type === "Add") stateTasks = [...stateTasks, response.data];
      else
        stateTasks[data.index] = {
          ...stateTasks[data.index],
          title: data.taskName,
        };
      setData(stateTasks);
      setAddorEdit(false, null);
    } else {
      alert("Something went wrong !!");
    }
  };

  const deleteTask = async (index, id) => {
    const { err } = await TasksController.deleteTask(id, token);
    if (!err) {
      const stateTasks = [...tasks];
      stateTasks.splice(index, 1);
      setData(stateTasks);
    } else {
      if (err.status === 400) alert("Marked task can't be deleted");
    }
  };

  const markReadUnRead = async (data) => {
    console.log(data);
    const status = data.completed === 0 ? 1 : 0;
    const { err } = await TasksController.editTask(
      data.id,
      { title: data.value, status },
      token
    );
    if (!err) {
      const stateTasks = [...tasks];
      stateTasks[data.index] = { ...stateTasks[data.index], completed: status };
      setData(stateTasks);
    }
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
          <Cards latestTasks={latestTasks} tasksInfo={tasksInfo} />
          <AddOrSearchTask
            setAddorEdit={setAddorEdit}
            setSearchText={setSearchText}
          />
          <TasksList
            searchText={searchText}
            markReadUnRead={markReadUnRead}
            setAddorEdit={setAddorEdit}
            tasks={tasks}
            deleteTask={deleteTask}
          />
        </>
      ) : (
        <NoTasks setAddorEdit={setAddorEdit} />
      )}
    </>
  );
};

export default withRouter(Dashboard);
