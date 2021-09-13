/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CardList from '../components/CardList'
import Loader from '../components/UI/Loader'
import CardCreator from './CardCreator'
// import { getCards } from '../functions/getCards'

// const MainWrapper = styled.div`
//   background-color: lightblue;
// `

const SearchInput = styled.input`
  width: 300px;
  padding: 5px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid #d9d9d9;
`

const Main = () => {

  const [cards, setCards] = useState([]) // []
  // const [sorted, setSorted] = useState('')
  const [searchRequest, setSearchRequest] = useState('')
  const [loading, setLoading] = useState(false)

  // const [cardsLimit, setCardsLimit] = useState(15)
  // const [cardsPage, setCardsPage] = useState(1)


  // const [, updateState] = React.useState();


  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      setLoading(true)
      // const response = await getCards(cardsLimit, cardsPage)

      const response = await axios.get('https://social-network-d781a-default-rtdb.europe-west1.firebasedatabase.app/cards.json')

      console.log('got cards', response.data);

      const localCards = []

      for (let prop in response.data) {
        localCards.push({
          [prop]: response.data[prop]
        })
      }

      console.log('localCards', localCards);

      setCards(localCards.reverse())

      console.log('cards after db get', cards);


    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  // const sortedCards = useMemo(() => {
  //   console.log('get sorted cards call!')

  //   if (sorted) {
  //     return [...cards].sort((a, b) => a[sorted].tolocaleCompare(b[sorted]))
  //   }

  //   return cards
  // }, [sorted, cards])

  // const sortedAndSearchedCards = useMemo(() => {
  //   return sortedCards.filter(card => card.title.toLowerCase().includes(searchRequest))
  // }, [searchRequest, sortedCards])

  const createCard = async card => {
    await axios.post('https://social-network-d781a-default-rtdb.europe-west1.firebasedatabase.app/cards.json', card).then(response => {
      console.log(response.data);
    })

    fetchData()

    setCards(cards)

    // updateState();
  }

  // const deleteCard = card => {
  //   setCards(cards.filter(cardItem => cardItem.id !== card.id))
  // }

  return (
    <>
      <h1>
        Main
      </h1>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchRequest}
        onChange={ev => setSearchRequest(ev.target.value)}
      />
      <CardCreator
        createCard={createCard}
      />
      {
        cards.length === 0
          // sortedAndSearchedCards.length === 0 // возможно заменить на card.length, поменяв условие
          ?
          <Loader />
          :
          <CardList
            // cards={sortedAndSearchedCards}
            cards={cards}
          // deleteCard={deleteCard}
          />
      }
    </>
  )

}

export default Main
