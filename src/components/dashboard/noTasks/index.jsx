import React from "react";
import { MainWrapper, Card, Title, AddTask } from "./styles";

const NoTasks = ({ setAddorEdit }) => {
  return (
    <MainWrapper>
      <Card>
        <Title>You have no task</Title>
        <AddTask
          onMouseDown={() => setAddorEdit(true, { type: "Add", value: "" })}
        >
          + New Task
        </AddTask>
      </Card>
    </MainWrapper>
  );
};

export default NoTasks;
