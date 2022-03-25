import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../firebase'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { login } from '../features/user/userSlice'
import AccHeader from '../components/AccHeader'
import AccFooter from '../components/AccFooter'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(userCredential.user.email)
      dispatch(
        login({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: userCredential.user.displayName,
        })
      )
      navigate('/teslaaccount')
    } catch (error) {
      console.log(error.message)
    }
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value, //set dynamic property key with es6
    }))
  }

  return (
    <>
      <AccHeader />
      <Container>
        <h1>Sign In</h1>
        <Form onSubmit={handleSubmit}>
          <Label>Email Address</Label>
          <Input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={onChange}
          />

          <Label>Password</Label>
          <Input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={onChange}
          />

          <Button>sign in</Button>
          <TextItem>
            <span>
              <a href='/'>Forgot email?</a>
            </span>
            <span>|</span>
            <span>
              <a href='/'>Forgot email?</a>
            </span>
          </TextItem>
        </Form>

        <Divider>OR</Divider>
        <StyledLink to='/signup'>
          <SigninButton>Create account</SigninButton>
        </StyledLink>
      </Container>
      <AccFooter />
    </>
  )
}
export default Login

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-bottom: 160px;
  h1 {
    font-weight: 500;
    font-size: 40px;
    margin-left: -200px;
    margin-top: 80px;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 23%;
  @media (min-width: 490px) and (max-width: 837px) {
    width: 35%;
  }
  @media (max-width: 480px) {
    width: 45%;
  }
`

const Label = styled.label`
  color: #5c5e62;
  font-weight: 500;
  font-size: 15px;
  padding-left: 20px;
  display: block;
  cursor: pointer;
  margin-bottom: 10px;
`

const Input = styled.input`
  margin-bottom: 30px;
  background-color: #f4f4f4;
  border: 1px solid #f4f4f4;
  outline: none;
  border-radius: 50px;
  padding: 12px 20px;
  color: #393c41;
  font-weight: 600;
`

const Button = styled.button`
  background-color: #3e6ae1;
  border: none;
  padding: 10px 40px;
  border-radius: 50px;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: all 0.4s;
  width: 100%;
  &:hover {
    background-color: #3457b1;
  }
`
const Divider = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin: 40px auto;
  white-space: nowrap;
  color: #5c5d61;
  width: 23%;
  font-weight: 500;

  &:before,
  &:after {
    content: '';
    display: inline-block;
    width: 40%;
    height: 1px;
    margin: 0px 8px;
    background-color: #e2e4e4;
  }
`
const StyledLink = styled(Link)`
  width: 23%;
`
const SigninButton = styled(Button)`
  background-color: transparent;
  color: #181b21;
  border: 3px solid #181b21;
  &:hover {
    background-color: #181b21;
    color: white;
  }
`
const TextItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  gap: 10px;
  font-size: 14px;
  span a {
    color: #5c5d61;
  }
`
