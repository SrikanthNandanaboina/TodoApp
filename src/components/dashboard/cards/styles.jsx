import styled from "styled-components";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 1rem 0;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  padding: 0 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-column: 2/12;
  }
`;

export const Card = styled.div`
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  color: #5b5f61;
`;

export const Count = styled.span`
  font-size: ${({ isTotal }) => (isTotal ? "16px" : "69px")};
  color: ${({ isTotal }) => (isTotal ? "#8b8d8e" : "#5d5aff")};
  text-align: left;
`;

export const TasksWrapper = styled.ul``;

export const Task = styled.li`
  text-align: left;
  color: #8b8d8e;
  font-size: 16px;
  text-decoration: ${({ status }) => (status ? "line-through" : "none")};
`;
