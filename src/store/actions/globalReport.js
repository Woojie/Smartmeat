
export const getAllReports = () => ({
  type: "START_GET_REPORTS"
})

export const finishGettingReports = (reports) => ({
  type: "FINISH_GET_REPORTS",
  payload: {
    reports,
  }
})