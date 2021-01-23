import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LoginCard = styled.div`
  padding: 24px;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input`
  padding: 12px 16px;
  margin: 0.5rem 0;
  border: none;
  background: #dfe4ef;
  border-radius: 8px;
  outline: none;
`;

export const Button = styled.span`
  margin: 0.5rem 0;
  background: #1e90ff;
  padding: 12px 0;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
`;
