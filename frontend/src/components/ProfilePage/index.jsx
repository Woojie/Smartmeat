import React from 'react'
import Results from './Results'



const ProfilePage = ( {user} ) => {
  console.log(user)
  let reports = user.reports.map((report, i) => (
    <Results key={i} number={i} carbon = {report.carbon} petrol = {report.petrol} />
))
  return(

    <div className='container' id='mainBody'>
      <h1>Saved Reports</h1>
      {reports}
    </div>
  )
}

export default ProfilePage