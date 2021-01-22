import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 4fr);
  padding: 1rem 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
    align-items: center;
  }
`;

export const TasksTitle = styled.span`
  @media (min-width: 768px) {
    grid-column: 1/3;
    text-align: left;
  }
  @media (min-width: 1024px) {
    grid-column: 2/3;
  }
`;

export const SearchTasks = styled.input`
  padding: 12px 16px;
  margin: 0.5rem 0;
  border: none;
  background: #dfe4ef;
  border-radius: 8px;
  outline: none;
  @media (min-width: 768px) {
    grid-column: 7/11;
  }
  @media (min-width: 1024px) {
    grid-column: 7/10;
  }
`;

export const AddTask = styled.span`
  margin: 0.5rem 0;
  background: #1e90ff;
  padding: 12px 0;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  @media (min-width: 768px) {
    grid-column: 11/-1;
  }
  @media (min-width: 1024px) {
    grid-column: 10/12;
  }
`;
