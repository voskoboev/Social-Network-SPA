import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CardList = ({ images }) => {
  return (
    <List>
      {images.map(image => {
        return (
          <Card
            key={image.id}
            image={image}
          />
        )
      })}
    </List>
  )
}

export default CardList
