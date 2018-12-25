export const startReport = () => ({
  type: "START_REPORT"
})

export const finishReport = (user) => ({
  type: "FINISH_REPORT",
  payload: {
    user
  }
})

export const startDeleteReport = () => ({
  type: "START_DELETE_REPORT",
})

export const finishDeleteReport = (user) => ({
  type: "FINISH_DELETE_REPORT",
  payload: {
    user,
  }
})

export const startAlterReport = () => ({
  type: "START_ALTER_REPORT",
})

export const finishAlterReport = (user) => ({
  type: "FINISH_ALTER_REPORT",
  payload: {
    user,
  }
})