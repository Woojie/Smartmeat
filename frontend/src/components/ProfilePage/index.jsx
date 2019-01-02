import React from 'react'
import Results from './Results'



const ProfilePage = ( {user} ) => {
  
  let reports = user.reports.map((report, i) => (
    <div className='accordion'>
    <Results key={i} number={i} carbon = {report.carbon} petrol = {report.petrol} />
    </div>
))
  return(
    <div className="light main-body">
      <div className="container py-5">
        <p className="h1 py-5">{user.email}'s Profile Page</p>
        <p className="h2">Saved Reports:</p>
        {reports}
      </div>
    </div>
  )
}

export default ProfilePage