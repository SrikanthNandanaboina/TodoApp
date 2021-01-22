import styled from "styled-components";

export const TaskWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0.5rem;
  margin: 0 2rem;
  @media (min-width: 1024px) {
    grid-gap: 1rem;
  }
`;

export const Checkbox = styled.input`
  grid-column: 1/2;
  @media (min-width: 1024px) {
    grid-column: 2/3;
  }
`;

export const Task = styled.span`
  grid-column: 2/9;
  text-align: left;
  text-decoration: ${({ status }) => (status ? "line-through" : "none")};
  font-weight: 500;
  color: dodgerblue;
  @media (min-width: 1024px) {
    grid-column: 3/9;
  }
`;

export const Icons = styled.span`
  grid-column: 9/-1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (min-width: 1024px) {
    grid-column: 10/12;
  }
`;

export const Icon = styled.span`
  margin: 0 6px;
`;

export const Line = styled.hr`
  grid-column: 1/-1;
  margin: 1rem 0;
  background-color: #cecbcb;
  height: 1px;
  border: 0;
  @media (min-width: 1024px) {
    margin: 1rem 5rem;
  }
  @media (min-width: 1280px) {
    margin: 0 7rem;
  }
  @media (min-width: 1920px) {
    margin: 0 10rem;
  }
`;
