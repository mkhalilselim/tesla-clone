import styled from 'styled-components'
import { Link } from 'react-router-dom'

function AccHeader() {
  return (
    <Container>
      <Link to='/'>
        <img src='/images/logo.svg' alt='tesla logo' />
      </Link>
      <Lang>
        <img src='/images/lang.svg' alt='language icon' />
        <span>en-US</span>
      </Lang>
    </Container>
  )
}
export default AccHeader

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
  padding: 14px 15px 10px 30px;
`

const Lang = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 500;
  span {
    margin-left: 5px;
  }
  img {
    width: 24px;
    height: 24px;
  }
  &:hover {
    background-color: hsla(0, 0%, 50.2%, 0.125);
  }
`
