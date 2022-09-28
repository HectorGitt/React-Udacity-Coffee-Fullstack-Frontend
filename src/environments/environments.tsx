export const environment = {
    production: false,
    apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
    auth0: {
      url: 'hectorfsnd.us.auth0.com', // the auth0 domain prefix
      audience: 'drink', // the audience set for the auth0 app
      clientId: 'TJHUWEujemMgzzBi2FwF8qwteJ6I6P9D', // the client id generated for the auth0 app
      callbackURL: 'http://localhost:3000', // the base url of the running react application. 
    }
  };