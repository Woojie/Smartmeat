import React from 'react'
import Results from './Results'



const ProfilePage = ( {user, loggedIn} ) => {
  
  let reports = user.reports === undefined ? "" : user.reports.map((report, i) => (
    <div className='accordion'>
    <Results key={i} number={i} carbon = {report.carbon} petrol = {report.petrol} />
    </div>
))
  let profilePage = loggedIn ? (
    <div className="container py-5">
      <p className="h1 py-5">{user.email}'s Profile Page</p>
      <p className="h2">Saved Reports:</p>
      {reports}
    </div>)
  : (
    <div className="container py-5">
      <p className="h1 py-5">You need to login before you can view the profile page!</p>
    </div>
  )

  
  
  return(
    <div className="light main-body">
      {profilePage}
    </div>
  )
}

export default ProfilePage