import React, { useState, useEffect, useRef } from 'react'
// import styled from 'styled-components'
import axios from 'axios'
import CardList from '../components/CardList'
import Loader from '../components/UI/Loader'
import CardCreator from './CardCreator'

// const MainWrapper = styled.div`
//   background-color: lightblue;
// `

const Main = () => {
  // const [images, setImages] = useState([])

  const [cards, setCards] = useState([
    // { id: 1, title: 'title1', body: 'body1' },
    // { id: 2, title: 'title2', body: 'body2' },
    // { id: 3, title: 'title3', body: 'body3' }
  ])

  const [title, setTitle] = useState('1')
  const [body, setBody] = useState('2')

  const addCard = (ev) => {
    ev.preventDefault()

    const newCard = {
      id: Date.now(),
      title,
      body
    }

    console.log(title)
    console.log(body)

    setCards([...cards, newCard])
    setTitle('')
    setBody('')
  }

  // useEffect(() => {
  // }, [])

  return (
    <>
      <h1>
        Main
      </h1>
      <CardCreator
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
        addCard={addCard}
      />
      <CardList
        cards={cards}
      />


      {/* {
        images.length === 0
          ? <Loader />
          : <CardList
            images={images}
          />
      } */}
    </>
  )

}

export default Main
