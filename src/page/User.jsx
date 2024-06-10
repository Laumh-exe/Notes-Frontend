import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

function User() {
  return (
    <>
      <PageWrapper>
        <UserWrapper>
          <h1>User</h1>
        </UserWrapper>
        <Nav>
          <StyledLink to="account">
            account
          </StyledLink>
          <StyledLink to="profile">
            profile
          </StyledLink>
        </Nav>
        <WindowWrapper>
          <Outlet />
        </WindowWrapper>
      </PageWrapper>
    </>
  );
}

//--styles--
const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  padding: 5px;
  border-radius: 5px;
  background: black;
  &:hover {
    background: white;
    color: black;
  }
`;

const WindowWrapper = styled.div`
  border: solid 1px orange;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 40px 10px 40px;
  min-height: 300px;
`;

const UserWrapper = styled.div`
  border: solid 1px yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageWrapper = styled.div`
  border: solid 2px red;
  display: flex;
  flex-direction: column;
`;

export default User;
