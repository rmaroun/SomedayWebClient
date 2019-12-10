import React from 'react'
import { render } from 'react-dom'
import { I18n } from 'aws-amplify'
import Amplify from 'aws-amplify'
import App from './App'
import config from './config'

I18n.putVocabularies({
  en: {
    'Not Signed Yet': 'Not signed up yet?'
  }
})

Amplify.configure(config)

render(<App />, document.getElementById('root'))
