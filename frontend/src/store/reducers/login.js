
const loggedIn = {
  token: "",
  loading: false,
  loggedIn: false
}
export const loginReducer = (state=loggedIn, action) => {
  if (action.type === "START_LOGIN"){
    return {
      ...state,
      loading: true
    }
  }else if(action.type === "FINISH_LOGIN"){
    return {
      ...state,
      loading: false,
      loggedIn: true,
      token: action.payload.token

    }
  }
  return state
}