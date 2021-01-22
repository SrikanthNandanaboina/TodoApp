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

const Cards = () => {
  return (
    <MainWrapper>
      <CardsWrapper>
        <Card>
          <Title>Tasks Completed</Title>
          <Count>
            5<Count isTotal>/ 20</Count>
          </Count>
        </Card>
        <Card>
          <Title>Latest Created Tasks</Title>
          <TasksWrapper>
            <Task>wefjwnbhb bhfbhwbf</Task>
            <Task>wefjwnbhb bhfbhwbf</Task>
            <Task status>wefjwnbhb bhfbhwbf</Task>
          </TasksWrapper>
        </Card>
        <Card>
          <Chart
            width="228px"
            height="100px"
            chartType="PieChart"
            data={[
              ["Tasks", "Completed"],
              ["Pending", 2],
              ["Done", 11],
            ]}
            legendToggle
          />
        </Card>
      </CardsWrapper>
    </MainWrapper>
  );
};

export default Cards;
