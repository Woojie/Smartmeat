import axios from 'axios'


export const startLogin = () => ({
  type: "START_LOGIN"
})

export const finishLogin = (user) => ({
  type: "FINISH_LOGIN",
  payload: {
    user
  }
})


export const startCheckForUser = () => 
({
  type: "START_CHECK_USER"
})



export const checkForUser = (token, decodedToken) => 
({
  type: "CHECK_USER",
  payload: {
    token,
    user: decodedToken
  }
})

// export const reduxThunkTryout = (token) => async dispatch => {
//   console.log(token)
//  let response = await axios.get('http://18.217.151.232/user/')
//   dispatch ({type:"CHECK_USER", payload:{
//     token,
//     user: response.data
//   }})
// }

export const reduxThunkTryout = (token) => {
  return async dispatch => {
    let onSuccess = (res) => {
      dispatch({
        token,
        user: res.data
      })
    }
    try {
      let res = await axios.get('http://18.217.151.232/user/')
      onSuccess(res)
    }
    catch (error) {
      console.log(error)
    }
  }
}



export const logout = () =>
({
  type: "LOGOUT"
})

export const validateLogin = () => ({
  type: "VALIDATE_LOGIN"
})