import { mongoReport } from '../apis/mongoDB'

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


