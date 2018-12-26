import React from 'react'
import Report from './Report'

const CommunityPage = ({user}) => {

  return (
    <div  className='container' id='mainBody'>
      <h1>Community</h1>
      <Report  user={user}/>
    </div>
  )
}

export default CommunityPage