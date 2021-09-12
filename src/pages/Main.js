import React, { useState, useMemo, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CardList from '../components/CardList'
import Loader from '../components/UI/Loader'
import CardCreator from './CardCreator'
import { getCards } from '../functions/getCards'
// import { getPagesCount, getPagesArr } from '../ancillary/ancillaryFns'

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

  const [cards, setCards] = useState([])
  const [sorted, setSorted] = useState('')
  const [searchRequest, setSearchRequest] = useState('')
  const [loading, setLoading] = useState(false)

  const [cardsLimit, setCardsLimit] = useState(15)
  const [cardsPage, setCardsPage] = useState(1)

  // const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {

      setLoading(true)

      const response = await getCards(cardsLimit, cardsPage)
      setCards(response.data)

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  // console.log('total pages', totalPages);

  const sortedCards = useMemo(() => {
    console.log('get sorted cards call!')

    if (sorted) {
      return [...cards].sort((a, b) => a[sorted].tolocaleCompare(b[sorted]))
    }

    return cards
  }, [sorted, cards])

  const sortedAndSearchedCards = useMemo(() => {
    return sortedCards.filter(card => card.title.toLowerCase().includes(searchRequest))
  }, [searchRequest, sortedCards])

  const createCard = card => {
    setCards([card, ...cards])
  }

  const deleteCard = card => {
    setCards(cards.filter(cardItem => cardItem.id !== card.id))
  }

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
        sortedAndSearchedCards.length === 0 // возможно заменить на card.length, поменяв условие
          ?
          <Loader />
          :
          <CardList
            cards={sortedAndSearchedCards}
            deleteCard={deleteCard}
          />
      }

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
