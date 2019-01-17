// import logger from 'redux-logger'

import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import { startSignup, finishSignup, validateEmailError, validateNamesError, validatePasswordError, userExists } from '../actions'
import { startReport, finishReport, startAlterReport,  finishAlterReport, startDeleteReport, finishDeleteReport } from '../actions/saveReport'
import { finishGettingReports } from '../actions/globalReport'
import { allReducers } from '../reducers'
import { alterReports, deleteReports } from '../func'
import { mongoUser, mongoReport } from '../apis/mongoDB'



export const signUserUp = (e, email, password, firstName, lastName) => {
  e.preventDefault()
  store.dispatch(startSignup())
  mongoUser.post('', {email, password, firstName, lastName})
  .then((res)=>{
    
    if(res.data.error) {
      store.dispatch(userExists())
    }else if (res.data.emailError || res.data.passwordError || res.data.namesError) {
      console.log(res.data)
      if (res.data.emailError) {
        store.dispatch(validateEmailError())
      }
      if (res.data.passwordError) {
        store.dispatch(validatePasswordError())
      }
      if (res.data.namesError) {
        store.dispatch(validateNamesError())
      }
    }else {

    store.dispatch(finishSignup())
  }
  })
}



export const saveReport = (report, email) => {
  store.dispatch(startReport())
  if (report === "") {

  }else {
    mongoReport.put('/report', {report, email})
    .then((res)=>{
      store.dispatch(finishReport(res.data))
    })
  }
}



export const alterReport = (oldReport, newReport, alteredReports, email) => {
    store.dispatch(startAlterReport())
    let newAlteredReports = alterReports(oldReport, newReport, alteredReports, email)
    
    mongoReport.put('/alterReport', {email, oldReport, newAlteredReports})
    .then((res)=> {
      store.dispatch(finishAlterReport(res.data))
    })
    .then(  
      mongoReport.get('/allReports')
      .then((res)=>store.dispatch(finishGettingReports(res.data))
    ))
}

export const deleteReport = (user, id) => {
 store.dispatch(startDeleteReport())
 let alteredUser = deleteReports(user, id)
 let email = user.email
 console.log(alteredUser)
    mongoReport.put('/deleteReport', {email, alteredUser})
  .then((res)=> store.dispatch(finishDeleteReport(res.data)))
}

const store = createStore(
  allReducers,
  applyMiddleware(ReduxThunk)
)

export default store