import axios from 'axios'

export const mongoUser =  axios.create({
  baseURL: 'http://18.217.204.57/user'
})



export const mongoReport =  axios.create({
  baseURL: 'http://18.217.204.57/report'
})

