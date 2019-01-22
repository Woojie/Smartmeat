import { mongoUser } from '../apis/mongoDB'
import setAuthToken from '../setAuthToken'

export const logUserIn = (e, email, password) => dispatch => {
  e.preventDefault()
  mongoUser.post('/login', {email, password})
  .then((res)=>{
    if(res.data.message){
      dispatch({type: "VALIDATE_LOGIN"})

    }else{
    const {token, user} = res.data
    setAuthToken(token)

    localStorage.setItem('token', token)
    dispatch({
      type: "FINISH_LOGIN",
      payload: {
        user
      }
    })
    }
  })
  .catch(error => console.log("error:", error))
}

export const searchForUser = token => dispatch => {
  setAuthToken(token)
  mongoUser.get()
  .then((res)=>{
    if(res.data.error) {
      localStorage.removeItem('token')
    }
    dispatch({
      type: "CHECK_USER",
      payload: {
        token, 
        user: res.data
      }
    })
  })
}

export const logout = () =>
({
  type: "LOGOUT"
})
