import { useEffect } from "react"
import { environment } from '../environments/environments';

const Redirect = () => {
    const {auth0} = environment
    useEffect(() => {
      window.location.replace(`https://${auth0.url}/authorize?audience=${auth0.audience}&response_type=token&client_id=${auth0.clientId}&redirect_uri=${auth0.callbackURL}`)
    },)
  return (
    <div className="redirect">You are not authorized, Redirecting to login page...</div>
  )
}

export default Redirect