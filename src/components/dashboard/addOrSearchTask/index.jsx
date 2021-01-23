import React from "react";
import { Wrapper, TasksTitle, SearchTasks, AddTask } from "./styles";

const AddOrSearchTasks = ({ setAddorEdit, setSearchText }) => {
  return (
    <Wrapper>
      <TasksTitle>Tasks</TasksTitle>
      <SearchTasks
        type="text"
        placeholder="Search by task name"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <AddTask
        onMouseDown={() => setAddorEdit(true, { type: "Add", value: "" })}
      >
        + New Task
      </AddTask>
    </Wrapper>
  );
};

export default AddOrSearchTasks;
