import React from 'react'
import Results from './Results'



const ProfilePage = ( {user} ) => {
  
  let reports = user.reports.map((report, i) => (
    <div className='accordion'>
    <Results key={i} number={i} carbon = {report.carbon} petrol = {report.petrol} />
    </div>
))
  return(

    <div className='container' id='mainBody'>
      <h1>Saved Reports</h1>
      {reports}
    </div>
  )
}

export default ProfilePage