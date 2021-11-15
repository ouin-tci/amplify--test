import '../styles/globals.css'

import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withAuthenticator(MyApp)
