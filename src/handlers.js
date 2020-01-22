const ratingController = require('./controller/rating');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

module.exports = {
  cpfQuery: async event => {
    let body, statusCode;
    try {
      const { cpf } = event.queryStringParameters;
      const ratingByCpf = await ratingController.getRatingByCpf(cpf);

      statusCode = 200;
      body = JSON.stringify(ratingByCpf);
    } catch (e) {
      if (!event.queryStringParameters || e.message === '400') {
        statusCode = 400;
        body = 'Missing CPF in query string';
      } else {
        statusCode = 500;
      }
    } finally {
      return {
        statusCode,
        body,
        headers: corsHeaders,
      };
    }
  },
};
