const reports = {
  reports: [],
}

export const reportsReducer = (state=reports, action) => {

  if(action.type === "GET_ALL_REPORTS") {
    return {
      ...state,
      reports: action.payload.reports
    }
  }
  return state
}