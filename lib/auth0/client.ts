import { auth0Config } from './config';
import { Auth0Client } from '@auth0/auth0-spa-js';

export const auth0Client = new Auth0Client({
  domain: auth0Config.domain,
  client_id: auth0Config.clientId,
  redirect_uri: auth0Config.callbackUrl,
});
