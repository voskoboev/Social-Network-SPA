import axios from "axios"

export const getCards = (cardsLimit, cardsPage) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts`, {
    params: {
      _limit: cardsLimit,
      _pages: cardsPage
    }
  })
}

export const getCardDetails = id => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}