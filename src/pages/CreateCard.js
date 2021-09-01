import React from 'react'
import styled from 'styled-components'

const PageTitle = styled.h1`
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;  
`

const TitleInput = styled.input`
  width: 300px;
  padding: 5px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid #d9d9d9;
`

const Textarea = styled.textarea`
  resize: none;
  width: 300px;
  height: 200px;
  padding: 5px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid #d9d9d9;
`

const SubmitButton = styled.button`
  width: 300px;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid #d9d9d9;
  background-color: #d9d9d9;
  transition: .2s all ease;

  &:hover {
    background-color: transparent;
    transition: .2s all ease;
  }
`

const CreateCard = () => {
  return (
    <>
      <PageTitle>
        Create Card
      </PageTitle>
      <Form>

        <TitleInput
          type="text"
          placeholder="Title"
        />
        <Textarea
          placeholder="Your Message"
        />
        <SubmitButton
          type="submit"
        >
          Submit
        </SubmitButton>
      </Form>
    </>
  )
}

export default CreateCard
