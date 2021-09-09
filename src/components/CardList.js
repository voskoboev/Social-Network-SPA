import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  
  grid-gap: 20px;
  padding-top: 40px;
`

const CardList = ({ cards, deleteCard }) => {

  return (
    <div>
      <div>
        Card List
      </div>
      <List>
        {cards.map(card => {
          return (
            <Card
              key={card.id}
              card={card}
              deleteCard={deleteCard}
            />
          )
        })}
      </List>
    </div>



  )
}

export default CardList
