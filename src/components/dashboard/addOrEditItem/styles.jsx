import styled from "styled-components";

export const PopUpWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 103;
  background: white;
  border-radius: 8px;
  padding: 24px;
  max-width: 425px;
`;

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: ${(props) => (props.isOpen ? 3 : -1)};
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.32);
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: ${(props) => (props.isOpen ? "0.1s ease-in-out" : "none")};
`;

export const PopUpHeader = styled.div`
  padding: 8px 0;
`;

export const HeaderText = styled.span`
  font-weight: bold;
  color: #1e90ff;
`;

export const PopUpContent = styled.div`
  padding: 8px 0;
  width: 100%;
  text-align: center;
`;

export const PopUpButtons = styled.div`
  padding: 8px 0;
  margin: 8px 0;
  text-align: center;
`;

export const CardButton = styled.span`
  cursor: pointer;
  padding: 4px 8px;
  border: 1px solid#1e90ff;
  border-radius: 4px;
  margin: 0 8px;
  background: ${({ isMain }) => (isMain ? "#1e90ff" : "#ffffff")};
  color: ${({ isMain }) => (isMain ? "#ffffff" : "#1e90ff")};
`;

export const TaskInput = styled.input`
  padding: 12px 16px;
  margin: 0.5rem 0;
  border: none;
  background: #dfe4ef;
  border-radius: 8px;
  outline: none;
`;
