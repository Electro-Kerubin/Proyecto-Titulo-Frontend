export const oktaConfig = {
    clientId: '0oa94x72wjJo81qdZ5d7',
    issuer: 'https://dev-78348667.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}