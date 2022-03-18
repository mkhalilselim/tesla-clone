import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <Link to="/">
        <img src="/images/logo.svg" alt="tesla logo" />
      </Link>

      <Menu>
        <Link to="/models">Model S</Link>
        <Link to="/model3">Model 3</Link>
        <Link to="/modelx">Model X</Link>
        <Link to="/modely">Model Y</Link>
        <Link to="/solarroof">Solar Roof</Link>
        <Link to="/solarpanels">Solar Panels</Link>
      </Menu>

      <RightMenu>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/">Account</Link>
        </li>
        <li onClick={() => setBurgerStatus(true)}>Menu</li>
      </RightMenu>

      <BurgerMenu show={burgerStatus}>
        <CloseIcon onClick={() => setBurgerStatus(false)}>
          <img src="/images/close.svg" />
        </CloseIcon>
        <li>
          <Link to="/">Existing Inventory</Link>
        </li>
        <li>
          <Link to="/">Used Inventory</Link>
        </li>
        <li>
          <Link to="/">Trade-In</Link>
        </li>
        <li>
          <Link to="/">Test Drive</Link>
        </li>
        <li>
          <Link to="/">Cybertruck</Link>
        </li>
        <li>
          <Link to="/">Roadster</Link>
        </li>
        <li>
          <Link to="/">Semi</Link>
        </li>
        <li>
          <Link to="/">Charging</Link>
        </li>
        <li>
          <Link to="/">Powerwall</Link>
        </li>
        <li>
          <Link to="/">Commercial Energy</Link>
        </li>
        <li>
          <Link to="/">Utilities</Link>
        </li>
        <li>
          <Link to="/">Find Us</Link>
        </li>
        <li>
          <Link to="/">Support</Link>
        </li>
        <li>
          <Link to="/">Investor Relations</Link>
        </li>
        <li>
          <Link to="/">
            <Lang>
              <img src="/images/lang.svg" />
              <div>
                <p>
                  <strong>United States</strong>
                </p>
                <a to="/">English</a>
              </div>
            </Lang>
          </Link>
        </li>
      </BurgerMenu>
    </Container>
  );
}
export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: 15px 20px 10px 50px;
  a {
    text-decoration: none;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  /* flex: 1; */
  @media (max-width: 853px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  list-style: none;
  font-weight: 600;
  li {
    cursor: pointer;
  }
`;

const BurgerMenu = styled.div`
  list-style: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1000000;
  font-weight: 500;
  padding: 28px 28px 48px 48px;
  width: 300px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: opacity 0.5s cubic-bezier(0.5, 0, 0, 0.75),
    transform 0.5s cubic-bezier(0.5, 0, 0, 0.75), visibility 0s 0s;
`;

const CloseIcon = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding-bottom: 16px;
  img {
    cursor: pointer;
  }
`;

const Lang = styled.div`
  display: flex;
  flex-direction: row;
  div {
    margin-left: 8px;
    margin-top: 15px;
  }
  a {
    color: #5c5e62;
    font-size: 13px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
