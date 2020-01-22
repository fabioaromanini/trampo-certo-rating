const cpfController = require('./controller/cpf');

module.exports = {
  cpfQuery: async event => {
    try {
      const { cpf } = event.queryStringParameters;
      return {
        statusCode: 200,
        body: JSON.stringify(cpfController.getCpfRating(cpf)),
      };
    } catch (e) {
      if (!event.queryStringParameters || !event.queryStringParameters.cpf) {
        return {
          statusCode: 400,
          body: 'Missing CPF in query string',
        };
      } else {
        return {
          statusCode: 500,
        };
      }
    }
  },
};
