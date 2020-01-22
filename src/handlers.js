const cpfController = require('./controller/cpf');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

module.exports = {
  cpfQuery: async event => {
    let body, statusCode;
    try {
      const { cpf } = event.queryStringParameters;
      statusCode = 200;
      body = JSON.stringify(cpfController.getCpfRating(cpf));
    } catch (e) {
      if (!event.queryStringParameters || !event.queryStringParameters.cpf) {
        statusCode = 400;
        body = 'Missing CPF in query string';
      } else {
        statusCode = 500;
      }
    } finally {
      return {
        statusCode,
        body,
        corsHeaders,
      };
    }
  },
};
