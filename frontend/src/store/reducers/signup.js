

const signIn = {
  loading: false,
  validateError: false,
  userExists: false
}

export const signinReducer = (state=signIn, action) => {
  if (action.type === "START_LOGOUT") {
    return {
      ...state,
      loading: true
    }
  }else if(action.type === "FINISH_LOGOUT") {
    return {
      ...state,
      loading: false,
      userExists: false,
      validateError: false, 
    }
  }else if (action.type === "VALIDATE_SIGNUP_ERROR") {
    return {
      ...state,
      loading: false,
      validateError: true
    }
  }else if(action.type === "USER_EXISTS_SIGNUP") {
    return {
      ...state, 
      loading: false,
      userExists: true
    }
  }
  return state
}