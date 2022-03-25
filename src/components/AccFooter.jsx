import styled from "styled-components";
import { Link } from "react-router-dom";

function AccFooter() {
  return (
    <Container>
      <li>
        <Link to="/">Tesla &copy;2022</Link>
      </li>
      <li>
        <Link to="/">Privacy & Legal</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </Container>
  );
}
export default AccFooter;

const Container = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 12px;
  font-size: 13px;
  font-weight: 500;
  padding: 30px;
  a {
    text-decoration: none;
    color: #5c5e62;
  }
`;
