import { deleteReports, alterReports } from '../func'
import { mongoReport } from '../apis/mongoDB'

export const saveReport = (report, email) => dispatch => {
  if (report === "") {
  }else {
    mongoReport.put('/report', {report, email})
    .then((res)=>{
      dispatch({
        type: "GET_REPORT",
        payload: {
          user: res.data
        }
      })
    })
  }
}



export const deleteReport = (user, id) => dispatch => {
  let alteredUser = deleteReports(user, id)
  let email = user.email
     mongoReport.put('/deleteReport', {email, alteredUser})
   .then((res)=> dispatch({
     type: "FINISH_DELETE_REPORT",
     payload: {
       user: res.data
     }
   }))
 }


 export const alterReport = (oldReport, newReport, alteredReports, email) => dispatch => {
  let newAlteredReports = alterReports(oldReport, newReport, alteredReports, email)
  
  mongoReport.put('/alterReport', {email, oldReport, newAlteredReports})
  .then((res)=> {
    dispatch({
      type: "FINISH_ALTER_REPORT",
      payload: {
        user: res.data
      }
    })
  })
  .then(  
    mongoReport.get('/allReports')
    .then((res)=>dispatch({
      type: "GET_ALL_REPORTS",
      payload: {
        reports: res.data
      }
    })
  ))
}

