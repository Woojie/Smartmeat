const reports = {
  reports: [],
  loading: false
}

export const reportsReducer = (state=reports, action) => {
  if(action.type === "START_GET_REPORTS") {
    return {
      ...state,
      loading: true
    }
  }else if(action.type === "FINISH_GET_REPORTS") {
    return {
      ...state,
      loading: false,
      reports: action.payload.reports
    }
  }
  return state
}