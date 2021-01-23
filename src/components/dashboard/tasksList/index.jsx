import React from "react";
import { Edit, Delete } from "../../../constants/icons";
import { Task, TaskWrapper, Checkbox, Icon, Icons, Line } from "./styles";

const TasksList = ({
  setAddorEdit,
  tasks,
  deleteTask,
  markReadUnRead,
  searchText,
}) => {
  return (
    <>
      {tasks.map(({ id, title, completed }, index) => {
        if (title.toLowerCase().includes(searchText.toLowerCase())) {
          return (
            <TaskWrapper key={id}>
              <Checkbox
                type="checkbox"
                checked={completed === 1 ? true : false}
                onChange={() =>
                  markReadUnRead({
                    index,
                    id,
                    value: title,
                    completed,
                  })
                }
              />
              <Task status={completed === 0 ? false : true}>{title}</Task>
              <Icons>
                <Icon
                  onMouseDown={() =>
                    setAddorEdit(true, {
                      type: "Edit",
                      index,
                      id,
                      value: title,
                      completed,
                    })
                  }
                >
                  <Edit />
                </Icon>
                <Icon onMouseDown={() => deleteTask(index, id)}>
                  <Delete />
                </Icon>
              </Icons>
              <Line />
            </TaskWrapper>
          );
        } else return null;
      })}
    </>
  );
};

export default TasksList;
