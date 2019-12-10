import React, { Component } from 'react'
import { withAuthenticator } from 'aws-amplify-react'
import { ConfirmSignUp, SignUp, SignIn, ForgotPassword } from './components'
import './index.css'

class App extends Component {
  copyCodeToClipboard = () => {
    const el = this.jwtokeninput
    //console.log('copyToClipboard => ', el)
    el.select()
    document.execCommand('copy')
    this.setState({ copySuccess: true })
  }

  render() {
    const { authState, authData, ...rest } = this.props
    // convert to date
    const JWTokenInitiatedAt = new Date(
      authData.signInUserSession.idToken.payload.iat * 1000
    )
    // convert to a date
    const JWTokenExpirationDate = new Date(
      authData.signInUserSession.idToken.payload.exp * 1000
    )

    return (
      <div>
        <h5>My App</h5>
        <hr />
        <p>Props:</p>
        <pre className="border p-3">{JSON.stringify(rest, null, 2)}</pre>
        JWT Token
        <span onClick={this.copyCodeToClipboard}>
          &nbsp;<u>copy to clipboard</u>
        </span>
        <pre className="border p-3">
          <textarea
            ref={pre => (this.jwtokeninput = pre)}
            defaultValue={authData.signInUserSession.idToken.jwtToken}
          />
        </pre>
        Initiated on
        <pre className="border p-3">
          {JWTokenInitiatedAt.toLocaleString('en-GB', {
            timeZone: 'Europe/Amsterdam'
          })}{' '}
          CET
        </pre>
        Expires on
        <pre className="border p-3">
          {JWTokenExpirationDate.toLocaleString('en-GB', {
            timeZone: 'Europe/Amsterdam'
          })}{' '}
          CET
        </pre>
        Id token payload
        <pre className="border p-3">
          {JSON.stringify(authData.signInUserSession.idToken.payload, null, 2)}
        </pre>
        Access Token
        <pre className="border p-3">
          {authData.signInUserSession.accessToken.jwtToken}
        </pre>
        Access token payload
        <pre className="border p-3">
          {JSON.stringify(
            authData.signInUserSession.accessToken.payload,
            null,
            2
          )}
        </pre>
        Refresh Token
        <pre className="border p-3">
          {authData.signInUserSession.refreshToken.token}
        </pre>
        Username
        <pre className="border p-3">{authData.username}</pre>
        Email
        <pre className="border p-3">
          {authData.signInUserSession.idToken.payload.email}
        </pre>
        AuthData
        <pre className="border p-3">{JSON.stringify(authData, null, 2)}</pre>
      </div>
    )
  }
}

export default withAuthenticator(App, true, [
  <SignIn />,
  <SignUp />,
  <ConfirmSignUp />,
  <ForgotPassword />
])
