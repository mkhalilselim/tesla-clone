import styled from "styled-components";
import { Link } from "react-router-dom";

function HomeFooter() {
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
      <li>
        <Link to="/">Careers</Link>
      </li>
      <li>
        <Link to="/">News</Link>
      </li>
      <li>
        <Link to="/">Engage</Link>
      </li>
      <li>
        <Link to="/">Locations</Link>
      </li>
    </Container>
  );
}
export default HomeFooter;

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
