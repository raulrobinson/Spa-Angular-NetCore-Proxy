const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] :
    //'https://solucionesagiles.telefonicawebsites.co';
    //'http://146.190.199.148/api/v1';
    // 'http://localhost:21051';
    'http://20.42.34.38';


const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/all",
      "/api/v1/books",
      "/api/v1/books/id?id=2",
      "/apigw/telefonica/v1/agile-solution-traceability/test-mock"
   ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;
