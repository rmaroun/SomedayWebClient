import React from 'react'
import { SignUp as AmpSignUp } from 'aws-amplify-react'
import { Auth } from 'aws-amplify'
import { I18n } from 'aws-amplify'
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Alert
} from 'reactstrap'

class SignUp extends AmpSignUp {
  onSubmit = event => {
    event.preventDefault()
    const { username, password } = this.inputs
    const email = username
    Auth.signUp(username, password, email)
      .then(() => this.changeState('confirmSignUp', username))
      .catch(err => this.error(err))
  }

  showComponent(themeIn) {
    const { theme, ...rest } = this.props

    return (
      <Card>
        <CardBody>
          <h1>{I18n.get('Sign Up')}</h1>
          <hr />
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <i className="fa fa-user" />
              </InputGroupAddon>
              <Input
                type="text"
                key="username"
                name="username"
                onChange={this.handleInputChange}
                placeholder={I18n.get('Username')}
              />
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <i className="fa fa-lock" />
              </InputGroupAddon>
              <Input
                type="password"
                key="password"
                name="password"
                onChange={this.handleInputChange}
                placeholder={I18n.get('Password')}
              />
            </InputGroup>
          </FormGroup>
        </CardBody>
        <CardFooter className="d-flex justify-content-between">
          <Button color="primary" className="px-4" onClick={this.onSubmit}>
            {I18n.get('Submit')}
          </Button>
          <Button color={'link'} onClick={() => this.changeState('signIn')}>
            {I18n.get('Sign In')}
          </Button>
        </CardFooter>
      </Card>
    )
  }
}

export default SignUp
