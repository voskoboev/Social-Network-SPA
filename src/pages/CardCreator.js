import React, { useState, useRef } from 'react'
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

// const ImageInput = styled.input`
//   width: 300px;
//   padding: 5px;
//   margin-bottom: 20px;
//   border-radius: 10px;
//   border: 2px solid #d9d9d9;
// `

const Textarea = styled.textarea`
  resize: none;
  width: 300px;
  height: 70px;
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
  cursor: pointer;

  &:hover {
    background-color: transparent;
    transition: .2s all ease;
  }

  &:active {
    background-color: #d9d9d9;
    transition: .2s all ease;
  }
`

const CardCreator = ({ title, body, setBody, setTitle, addCard }) => {

  // const clearInputs = () => {

  // }

  // const prventFormDefault = ev => {
  //   ev.preventDefault()
  // }

  return (
    <>
      <PageTitle>
        Create Card
      </PageTitle>
      <Form
        // onSubmit={prventFormDefault}
      >
        <TitleInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={ev => setTitle(ev.target.value)}
        />
        {/* <ImageInput
          type="file"
          alt="image-input"
        /> */}
        <Textarea
          placeholder="Your Message"
          value={body}
          onChange={ev => setBody(ev.target.value)}
        />
        <SubmitButton
          onClick={addCard}
        >
          Submit
        </SubmitButton>
      </Form>
    </>
  )
}

export default CardCreator