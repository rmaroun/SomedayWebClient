import React from 'react'
import { ConfirmSignUp as AmpConfirmSignUp } from 'aws-amplify-react'
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

class ConfirmSignUp extends AmpConfirmSignUp {
  showComponent(themeIn) {
    const { error, theme, ...rest } = this.props
    const { hide } = this.props
    const username = this.usernameFromAuthData()

    if (hide && hide.includes(ConfirmSignUp)) {
      return null
    }

    return (
      <Card>
        <CardBody>
          <h1>
            {I18n.get('Confirm')} {I18n.get('Sign Up')}
          </h1>
          <p className="text-muted">Please enter your confirmation code</p>
          {error ? <Alert color="danger">{error}</Alert> : undefined}

          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <i className="fa fa-user" />
              </InputGroupAddon>
              {username ? (
                <Input
                  value={username}
                  disabled
                  type="text"
                  key="username"
                  name="username"
                  placeholder={I18n.get('Username')}
                  onChange={this.handleInputChange}
                />
              ) : (
                <Input
                  type="text"
                  key="username"
                  name="username"
                  placeholder={I18n.get('Username')}
                  onChange={this.handleInputChange}
                />
              )}
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <i className="fa fa-user" />
              </InputGroupAddon>
              <Input
                type="text"
                key="code"
                name="code"
                placeholder={I18n.get('Code')}
                onChange={this.handleInputChange}
              />
            </InputGroup>
          </FormGroup>
        </CardBody>
        <CardFooter className="d-flex justify-content-between">
          <Button color="primary" className="px-4" onClick={this.confirm}>
            {I18n.get('Submit')}
          </Button>
          <div>
            <Button
              color="secondary"
              className="mr-1"
              theme={theme}
              onClick={this.resend}
            >
              {I18n.get('Resend Code')}
            </Button>
            <Button onClick={() => this.changeState('signIn')}>
              {I18n.get('Sign In')}
            </Button>
          </div>
        </CardFooter>
      </Card>
    )
  }
}

export default ConfirmSignUp
