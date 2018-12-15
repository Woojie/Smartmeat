
const loggedIn = {
  user: {},
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
      user: action.payload.user

    }
  }else if(action.type === "START_CHECK_USER"){

    return {
      ...state,
      loading: true
    }
  }else if(action.type === "CHECK_USER"){

    return {
      ...state,
      loading: false,
      loggedIn: action.payload.token !== undefined,
      user: action.payload.user
    }
  }
  return state
}

