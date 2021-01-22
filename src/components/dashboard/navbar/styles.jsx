import styled from "styled-components";

export const NavbarWrapper = styled.div`
  height: 5rem;
  background: white;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) {
    padding: 0 7rem;
  }
  @media (min-width: 1280px) {
    padding: 0 10rem;
  }
`;

export const UserDataWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileIcon = styled.span``;

export const Name = styled.span`
  padding: 0 16px;
  font-size: 16px;
  font-weight: 500;
  color: #8b8d8e;
`;

export const Logout = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #8b8d8e;
`;

export const Image = styled.img`
  height: 50px;
`;
