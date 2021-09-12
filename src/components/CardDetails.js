import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCardDetails } from '../functions/getCards'

const CardDetails = () => {
  const [cardDetails, setCardDetails] = useState({})
  const params = useParams()

  const {id, title, body} = cardDetails
  
  useEffect(() => {
    fetchCardDetails()
  }, [])

  async function fetchCardDetails() {
    try {
      const response = await getCardDetails(params.id)

      console.log('resp', response.data);

      setCardDetails(response.data)

    } catch (err) {
      console.log(err)
    } finally {
      console.log('finally rewrite')
    }
  }

  return (
    <div>
      <Link to="/">
        To Main
      </Link>
      <h1>
        Card Details
      </h1>
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
  )
}

export default CardDetails
