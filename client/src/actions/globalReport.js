import { mongoReport } from '../apis/mongoDB'


export const getAllReports = () => ({
  type: "START_GET_REPORTS"
})

export const finishGettingReports = (reports) => ({
  type: "FINISH_GET_REPORTS",
  payload: {
    reports,
  }
})

export const grabAllReports = () => dispatch => {
  mongoReport.get('/allReports')
  .then(res => {
    dispatch({
      type: "GET_ALL_REPORTS",
      payload: {
        reports: res.data
      }
    })
  })
}


