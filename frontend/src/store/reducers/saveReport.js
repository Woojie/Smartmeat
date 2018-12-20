const report = {
  user: {},
  loading: false,
  report: {}
}

export const reportReducer = (state = report, action) => {
  if(action.type === "START_REPORT") {
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
  }
  return state
}