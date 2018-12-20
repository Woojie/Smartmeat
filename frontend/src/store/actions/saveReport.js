export const startReport = () => ({
  type: "START_REPORT"
})

export const finishReport = (user) => ({
  type: "FINISH_REPORT",
  payload: {
    user
  }
})
