import axios from "axios"

export const getCards = (cardsLimit, cardsPage) => {
  // return axios.get(`https://jsonplaceholder.typicode.com/posts`, {
  //   params: {
  //     _limit: cardsLimit,
  //     _pages: cardsPage
  //   }
  // })

  return axios.post('https://social-network-d781a-default-rtdb.europe-west1.firebasedatabase.app/cards.json')
}

export const getCardDetails = id => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}