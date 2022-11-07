import React from 'react'
import Me from './Me'

function Profile(props) {

  return (
    <div>
      <h1>{props.fullname}</h1>
      <h3>{props.bio}</h3>
      <h3>{props.profession}</h3>
      <button onClick={()=>props.handleName(props.fullname)}>click here to show name</button>

      {props.children}
    </div>

  )
}

export default Profile