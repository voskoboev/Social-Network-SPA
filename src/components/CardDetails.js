import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { getCardDetails, getCards } from '../functions/getCards'
import Loader from '../components/UI/Loader'

const CardDetailsImage = styled.img`
  width: 400px;
  height: 400px;  
`

const CardDetails = () => {
  const [cardDetails, setCardDetails] = useState([])
  const params = useParams()

  const { id, title, body, imageUrl } = cardDetails

  useEffect(() => {
    fetchCardDetails()
  }, [])

  async function fetchCardDetails() {
    try {
      const response = await getCardDetails()

      // const response = await getCards()

      const localCards = []

      for (let prop in response.data) {
        localCards.push(response.data[prop])
      }
      console.log('detail params', params.id);
      console.log('localCards details', localCards);
      console.log('getCardsDetails', response.data);

      // let arr = []

      // for (let card of localCards) {
      //   if (card.id === params.id) {
      //     arr.push(localCards[card])
      //   }

      //   console.log('card for of', card.id);
      // }

      for (let i = 0; i < localCards.length; i++) {
        if (+params.id === localCards[i].id) {
          setCardDetails(localCards[i])
          break
        }
      }

    } catch (err) {
      console.log(err)
    } finally {
      console.log('finally rewrite')
    }
  }

  return (
    <div>
      {
        cardDetails.length === 0
          ? <Loader />
          : <div>
            <Link to="/">
              To Main
            </Link>
            <h1>
              Card Details
            </h1>
            <CardDetailsImage
              src={imageUrl}
              alt="details-image"
            />
            <div>
              {id}
            </div>
            <div>
              title:
              {title}
            </div>
            <div>
              body:
              {body}
            </div>
          </div>
      }

    </div>
  )
}

export default CardDetails
