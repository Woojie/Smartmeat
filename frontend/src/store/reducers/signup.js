

const signIn = {
  loading: false,
}

export const signinReducer = (state=signIn, action) => {
  if (action.type === "START_LOGOUT"){
    return {
      ...state,
      loading: true
    }
  }else if(action.type === "FINISH_LOGOUT"){
    return {
      ...state,
      loading: false,
    }
  }
  return state
}