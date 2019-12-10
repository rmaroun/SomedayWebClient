import React, { Component } from 'react'
import { render } from 'react-dom'
import { I18n } from 'aws-amplify'
import { ForgotPassword as AmpForgotPassword } from 'aws-amplify-react'
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

class ForgotPassword extends AmpForgotPassword {
  onSubmit = event => {
    event.preventDefault()
    super.send()
  }

  showComponent(themeIn) {
    const { error, theme, ...rest } = this.props

    return (
      <Card>
        <CardBody>
          <h1>{I18n.get('Forgot Password')}</h1>
          <hr />
          {error ? <Alert color="danger">{error}</Alert> : undefined}

          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <i className="fa fa-user" />
              </InputGroupAddon>
              <Input
                key="username"
                name="username"
                onChange={this.handleInputChange}
                type="text"
                id="username"
                placeholder={I18n.get('Username')}
              />
            </InputGroup>
          </FormGroup>
        </CardBody>
        <CardFooter className="d-flex justify-content-between">
          <Button color="primary" className="px-4" onClick={this.onSubmit}>
            {I18n.get('Submit')}
          </Button>
          <Button onClick={() => this.changeState('signIn')}>
            {I18n.get('Sign In')}
          </Button>
        </CardFooter>
      </Card>
    )
  }
}

export default ForgotPassword
