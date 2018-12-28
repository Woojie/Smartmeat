
export const loggedIn = {
  user: {},
  loading: false,
  loggedIn: false,
  loginError: false,
  reportError: false,
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
      loginError: false,
      user: action.payload.user

    }
  }else if(action.type ==="VALIDATE_LOGIN") {
    return {
      ...state,
      loading: false,
      loginError: true,
    }
  }else if(action.type === "START_CHECK_USER") {

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
  }else if(action.type ==="LOGOUT"){
    localStorage.removeItem('token')

    return {
      ...state,
      loggedIn: false,
      user: ""
    }
  }else if(action.type === "START_REPORT") {
    return {
      ...state,
      loading: true
    }
  }else if(action.type === "FINISH_REPORT") {
    return {
      ...state,
      loading: false, 
      user: action.payload.user,
    }
  }else if(action.type === "START_ALTER_REPORT") {
    return {
      ...state,
      reportError: false
    }
  }else if(action.type === "FINISH_ALTER_REPORT") {
    return {
      ...state,
      user: action.payload.user,
      reportError: false
    }
  }else if(action.type === "ALTER_REPORT_ERROR") {
    return {
      ...state,
      reportError: true
    }
  }
  return state
}

