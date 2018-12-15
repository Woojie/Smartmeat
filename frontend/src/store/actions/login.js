


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
