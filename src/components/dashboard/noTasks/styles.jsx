import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 5rem);
`;

export const Card = styled.div`
  padding: 24px;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  margin-bottom: 16px;
  font-weight: 500;
`;

export const AddTask = styled.span`
  background: #1e90ff;
  padding: 4px 0;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
`;
