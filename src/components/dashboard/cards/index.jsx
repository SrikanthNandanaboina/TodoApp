import React from "react";
import { Chart } from "react-google-charts";
import {
  MainWrapper,
  Card,
  CardsWrapper,
  Task,
  TasksWrapper,
  Title,
  Count,
} from "./styles";

const Cards = ({ latestTasks, tasksInfo }) => {
  return (
    <MainWrapper>
      <CardsWrapper>
        <Card>
          <Title>Tasks Completed</Title>
          <Count>
            {tasksInfo.completed}
            <Count isTotal>/ {tasksInfo.completed + tasksInfo.pending}</Count>
          </Count>
        </Card>
        <Card>
          <Title>Latest Created Tasks</Title>
          <TasksWrapper>
            {latestTasks.map((task) => (
              <Task key={task.id} status={task.completed === 0 ? false : true}>
                {task.title}
              </Task>
            ))}
          </TasksWrapper>
        </Card>
        <Card>
          <Chart
            width="228px"
            height="100px"
            chartType="PieChart"
            data={[
              ["Tasks", "Completed"],
              ["Pending", tasksInfo.pending],
              ["Done", tasksInfo.completed],
            ]}
            legendToggle
          />
        </Card>
      </CardsWrapper>
    </MainWrapper>
  );
};

export default Cards;
