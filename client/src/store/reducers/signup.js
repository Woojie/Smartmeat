

const signIn = {
  loading: false,
  validateError: false,
  userExists: false,
  namesError: false,
  passwordError: false,
  successfulLogin: false
}

export const signinReducer = (state=signIn, action) => {
  if (action.type === "START_SIGNUP") {
    return {
      ...state,
      loading: true,
      validateError: false,
      userExists: false, 
      passwordError: false,
      namesError: false
    }
  }else if(action.type === "FINISH_SIGNUP") {
    return {
      ...state,
      loading: false,
      userExists: false,
      validateError: false, 
      successfulLogin: true,
      passwordError: false,
      namesError: false
    }

  }else if (action.type === "VALIDATE_SIGNUP_ERROR") {
    return {
      ...state,
      loading: false,
      validateError: true
    }
  }else if (action.type === "VALIDATE_PASSWORD_ERROR") {
    return {
      ...state,
      loading: false,
      passwordError: true
    }
  }else if (action.type === "VALIDATE_NAMES_ERROR") {
    return {
      ...state,
      loading: false,
      namesError: true
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