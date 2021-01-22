import React from "react";
import { Edit, Delete } from "../../../constants/icons";
import { Task, TaskWrapper, Checkbox, Icon, Icons, Line } from "./styles";

const TasksList = ({ setAddorEdit }) => {
  return (
    <>
      <TaskWrapper>
        <Checkbox type="checkbox" />
        <Task>Do something</Task>
        <Icons>
          <Icon
            onMouseDown={() =>
              setAddorEdit(true, { type: "Edit", index: 0, value: "" })
            }
          >
            <Edit />
          </Icon>
          <Icon>
            <Delete />
          </Icon>
        </Icons>
        <Line />
      </TaskWrapper>
    </>
  );
};

export default TasksList;
