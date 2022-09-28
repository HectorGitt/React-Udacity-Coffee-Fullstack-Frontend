import React, {useState} from 'react'
import Redirect from './Redirect'


const PrivateElement = ({component}: {component: React.ReactElement}) => {
  const [isAuthenticated, ] = useState(false)
  return (
    isAuthenticated ? (
        component
    ) : (
        <Redirect/>
  )
    )
}

export default PrivateElement