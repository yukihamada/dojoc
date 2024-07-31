import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;

const Auth0ProviderWithHistory = ({ children }) => {
  const onRedirectCallback = (appState) => {
    window.location.href = appState?.returnTo || window.location.pathname;
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : '',
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE, // オプション：必要に応じて設定
        scope: "openid profile email", // オプション：必要に応じて設定
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
      useRefreshTokens={false}
      useRefreshTokensFallback={false}
      skipRedirectCallback={true}
      auth0Client={{
        httpTimeout: 5000,
        leeway: 60,
        async createAuth0Client(options) {
          const { default: createAuth0Client } = await import('@auth0/auth0-spa-js');
          return createAuth0Client(options);
        },
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;