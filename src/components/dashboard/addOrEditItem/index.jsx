import React, { useState } from "react";
import {
  Overlay,
  PopUpButtons,
  PopUpContent,
  PopUpHeader,
  PopUpWrapper,
  TaskInput,
  HeaderText,
  CardButton,
} from "./styles";

const AddOrEditItem = ({ popUpType, togglePopUp, setAddorEdit }) => {
  const { type, index, value, id } = popUpType;
  const [taskName, setTaskName] = useState(value);

  const saveTask = () => {
    togglePopUp({ type, taskName, index, id });
  };

  return (
    <>
      <Overlay isOpen />
      <PopUpWrapper>
        <PopUpHeader>
          <HeaderText>{type === "Add" ? "Add Task" : "Edit Task"}</HeaderText>
        </PopUpHeader>
        <PopUpContent>
          <TaskInput
            type="text"
            placeholder="Enter Task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </PopUpContent>
        <PopUpButtons>
          <CardButton onMouseDown={() => setAddorEdit(false, null)}>
            Cancel
          </CardButton>
          <CardButton isMain onMouseDown={() => saveTask()}>
            Save
          </CardButton>
        </PopUpButtons>
      </PopUpWrapper>
    </>
  );
};

export default AddOrEditItem;
