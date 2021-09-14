/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CardList from '../components/CardList'
import Loader from '../components/UI/Loader'
import CardCreator from './CardCreator'

import Modal from '../components/UI/Modal'

// import { getCards } from '../functions/getCards'

// const MainWrapper = styled.div`
//   background-color: lightblue;
// `

const AddCardBtn = styled.button`
  width: 150px;
  border: 2px solid red;
  border-radius: 20px;
  padding: 10px;
  background-color: transparent;
  font-weight: 600;
  transition: .3s all ease;
  cursor: pointer;
  
  &:hover {
    transition: .3s all ease;
    background-color: red;
  }
`

const Main = () => {
  const [cards, setCards] = useState([])

  const [visibility, setVisibility] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const response = await axios.get('https://social-network-d781a-default-rtdb.europe-west1.firebasedatabase.app/cards.json')

      console.log('got cards in main', response.data);

      const localCards = []

      for (let prop in response.data) {
        localCards.push(response.data[prop])
      }

      setCards(localCards.reverse())
    } catch (err) {
      console.log(err)
    }
  }

  const createCard = async card => {
    await axios.post('https://social-network-d781a-default-rtdb.europe-west1.firebasedatabase.app/cards.json', card).then(response => {
      console.log(response.data);
    })

    fetchData()

    setCards(cards)
  }

  // const deleteCard = card => {
  //   setCards(cards.filter(cardItem => cardItem.id !== card.id))
  // }

  return (
    <>
      <Modal
        visibility={visibility}
        setVisibility={setVisibility}
      >
        <CardCreator
          createCard={createCard}
          setVisibility={setVisibility}
        />
      </Modal>

      <AddCardBtn
        onClick={() => setVisibility(true)}
      >
        Add Picture
      </AddCardBtn>

      <h1>
        Main
      </h1>

      {
        cards.length === 0
          ?
          <Loader />
          :
          <CardList
            cards={cards}
          // deleteCard={deleteCard}
          />
      }
    </>
  )

}

export default Main
