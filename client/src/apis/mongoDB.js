import axios from 'axios'

export const mongoUser =  axios.create({
  baseURL: 'http://localhost:3030/user'
})

export const mongoReport =  axios.create({
  baseURL: 'http://localhost:3030/report'
})
