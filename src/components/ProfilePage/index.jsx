import React from 'react'
import Results from './Results'



const ProfilePage = ( {user, loggedIn} ) => {
  let reports = user.reports === undefined ? "" : user.reports.map((report, i) => (
    <div className='accordion'>
    <Results
      key={i} 
      number={i} 
      order={report.order} 
      user={user} 
      carbon = {report.carbon} 
      petrol = {report.petrol} 
      email={report.email}
      date= {report.date} 
      id={report.id}
    />
    </div>
))
  let profilePage = loggedIn ? (
    <div className="container py-5">
      <p className="h1 text-center my-5">{user.firstName}'s Profile Page</p>
      <p className="h3">Saved Reports:</p>
      {reports}
    </div>)
  : (
    <div className="container py-5">
      <div className='row align-items-center justify-content-center'>
      <div className='col align-self-center'>
        <p className="h1 py-5" id="loginRequest">You need to login before you can view the profile page!</p>
      </div>
      </div>
    </div>
  )

  
  
  return(
    <div className="light main-body">
      {profilePage}
    </div>
  )
}

export default ProfilePage