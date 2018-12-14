export const startLogin = () => ({
  type: "START_LOGIN"
})

export const finishLogin = (token) => ({
  type: "FINISH_LOGIN",
  payload: {
    token
  }
})

export const startSignup = () => ({
  type: "START_SIGNUP"
})

export const finishSignup = () => ({
  type: "FINISH_SIGNUP"
})

