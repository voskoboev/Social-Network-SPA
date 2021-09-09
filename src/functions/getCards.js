import axios from "axios"

export const getCards =  () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=9')
}