import React, { useState } from 'react'
import styled from 'styled-components'

const PageTitle = styled.h1`
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;  
`

const InputPassword = styled.input`
  width: 300px;
  padding: 5px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid #d9d9d9;
`

const InputEmail = styled.input`
  width: 300px;
  padding: 5px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid #d9d9d9;
`

const Button = styled.button`
  width: 300px;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid #d9d9d9;
  background-color: #d9d9d9;
  transition: .2s all ease;
  margin-bottom: 20px;

  &:hover {
    background-color: transparent;
    transition: .2s all ease;
  }
`

const Auth = () => {

  // const emailRef = React.createRef()
  // const passwordRef = React.createRef()

  const passwordMinLength = 6

  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()
  }

  const handleLogin = () => {
    // const password = passwordRef.current.value

    // if (password.length <= 6) {
    //   return alert('Min length is 6!')
    // } else {
    //   // setPasswordValue(password)
    // }

  }

  console.log('state pass', passwordValue)

  const handleRegister = () => {
    // console.log('register');
  }

  return (
    <>
      <PageTitle>
        Auth
      </PageTitle>
      <Form
        onSubmit={handleSubmit}
      >
        <InputEmail
          type="text"
          placeholder="Email"
          // ref={emailRef}
        />
        <InputPassword
          type="text"
          placeholder="Password"
          // ref={passwordRef}
          onClick={ev => setPasswordValue(ev.target.value)}
          // value={passwordValue}
        />
        <Button
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          onClick={handleRegister}
        >
          Register
        </Button>
      </Form>
    </>
  )
}

export default Auth
