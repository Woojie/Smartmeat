export const startLogin = () => ({
  type: "START_LOGIN"
})

export const finishLogin = (token) => ({
  type: "FINISH_LOGIN",
  payload: {
    token
  }
})
