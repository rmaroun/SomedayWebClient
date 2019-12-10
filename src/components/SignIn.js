import React from 'react'
import { SignIn as AmpSignIn } from 'aws-amplify-react'
import { I18n } from 'aws-amplify'

class SignIn extends AmpSignIn {
  /*constructor(props) {
    super(props)
  }*/

  handleStateChange = foo => {
    console.log('f', foo)
  }

  handleAuthEvent = foo => {
    console.log('f', foo)
  }

  showComponent(/*themeIn*/) {
    const { error, fetching = !true } = this.state // SOMETHING LIKE THIS WOULD BE IDEAL
    return (
      <div>
        Sign In
        {error && <div>{error}</div>}
        {fetching && <div>Loading</div>}
        <input
          type="text"
          id="username"
          key="username"
          name="username"
          placeholder={I18n.get('Username')}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          id="password"
          key="password"
          name="password"
          placeholder={I18n.get('Password')}
          onChange={this.handleInputChange}
        />
        <button disabled={fetching} onClick={this.signIn}>
          {I18n.get('Sign In')}
        </button>
        <button onClick={() => this.changeState('forgotPassword')}>
          {I18n.get('Forgot Password')}
        </button>
        <button onClick={() => this.changeState('confirmSignUp')}>
          {I18n.get('Confirm a Code')}
        </button>
      </div>
    )
  }
}

export default SignIn

// import React from 'react'
// import { SignIn as AmpSignIn } from 'aws-amplify-react'
// import { I18n } from 'aws-amplify'
// import {
//   Card,
//   CardBody,
//   CardFooter,
//   Button,
//   FormGroup,
//   InputGroup,
//   InputGroupAddon,
//   Input,
//   Alert
// } from 'reactstrap'

// class SignIn extends AmpSignIn {
//   showComponent(themeIn) {
//     const { error, fetching = !true } = this.props
//     return (
//       <Card>
//         <CardBody>
//           <h1>{I18n.get('Sign In')}</h1>
//           <hr />
//           {error && <Alert color="danger">{error}</Alert>}
//           <FormGroup>
//             <InputGroup>
//               <InputGroupAddon addontype="prepend">
//                 <i className="fa fa-user" />
//               </InputGroupAddon>
//               <Input
//                 key="username"
//                 name="username"
//                 onChange={this.handleInputChange}
//                 type="text"
//                 id="username"
//                 placeholder={I18n.get('Username')}
//               />
//             </InputGroup>
//           </FormGroup>

//           <FormGroup>
//             <InputGroup>
//               <InputGroupAddon addontype="prepend">
//                 <i className="fa fa-unlock-alt" />
//               </InputGroupAddon>
//               <Input
//                 type="password"
//                 id="password"
//                 key="password"
//                 name="password"
//                 placeholder={I18n.get('Password')}
//                 onChange={this.handleInputChange}
//               />
//             </InputGroup>
//           </FormGroup>
//           <div className="text-center">
//             <Button color="warning" onClick={() => this.changeState('signUp')}>
//               {I18n.get('Not Signed Yet', '')} {I18n.get('Sign Up')}
//             </Button>
//           </div>
//         </CardBody>
//         <CardFooter className="d-flex justify-content-between">
//           <Button
//             disabled={fetching}
//             color="primary"
//             className="px-4"
//             onClick={this.signIn}
//           >
//             {!fetching ? I18n.get('Sign In') : 'Loading...'}
//           </Button>
//           <div>
//             <Button
//               color={'link'}
//               onClick={() => this.changeState('forgotPassword')}
//             >
//               {I18n.get('Forgot Password')}
//             </Button>
//             <Button
//               color={'link'}
//               onClick={() => this.changeState('confirmSignUp')}
//             >
//               {I18n.get('Confirm a Code')}
//             </Button>
//           </div>
//         </CardFooter>
//       </Card>
//     )
//   }
// }

// export default SignIn
