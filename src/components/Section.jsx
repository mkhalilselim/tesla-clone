import styled, { keyframes } from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({
  title,
  description,
  descriptionLink,
  buttonOne,
  buttonTwo,
  bgImg,
  showDownArrow,
}) {
  return (
    <Fade bottom>
      <Wrapper bgImg={bgImg}>
        <Fade bottom>
          <TextContainer>
            <h1>{title}</h1>
            <p>
              {description} <a href='/'>{descriptionLink}</a>
            </p>
          </TextContainer>
          <ButtonContainer>
            <ButtonGroup>
              <Button1>{buttonOne}</Button1>
              {buttonTwo && <Button2>{buttonTwo}</Button2>}
            </ButtonGroup>
            {showDownArrow && (
              <DownArrow src='/images/down-arrow.svg'></DownArrow>
            )}
          </ButtonContainer>
        </Fade>
      </Wrapper>
    </Fade>
  )
}
export default Section

const Wrapper = styled.div`
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const TextContainer = styled.div`
  text-align: center;
  margin-top: calc(16vh + 24px);
  padding: 0 24px;
  h1 {
    font-size: 40px;
    font-weight: 500;
    /* font-family: 'Gotham SSm'; */
    letter-spacing: -0.6px;
    line-height: 48px;
  }
  p {
    color: #444;
    padding-top: 6px;
  }
  a {
    color: #444;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Button1 = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  border: 3px solid transparent;
  border-radius: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  padding: 4px 24px;
  color: #fff;
  min-width: 256px;
  height: 40px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
`

const Button2 = styled(Button1)`
  background-color: rgba(244, 244, 244, 0.65);
  color: rgba(23, 26, 32, 0.8);
`

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
  40% {transform: translateY(-10px);} 
  60% {transform: translateY(-5px);} 
`

const DownArrow = styled.img`
  cursor: pointer;
  height: 40px;
  margin-bottom: 24px;
  animation: ${bounce} infinite 1.5s;
`
