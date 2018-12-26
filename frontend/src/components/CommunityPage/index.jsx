import React from 'react'
import { connect } from 'react-redux'

import Report from './Report'
import { getCalculation } from '../../store'

const CommunityPage = ({user}) => {

  return (
    <div  className='container' id='mainBody'>
      <h1>Community</h1>
      <br />
      <Report getCalculation={getCalculation}  user={user}/>
      
    </div>
  )
}

export default connect()(CommunityPage)