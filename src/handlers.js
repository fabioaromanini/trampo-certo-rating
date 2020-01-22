module.exports = {
  cpfQuery: async event => {
    const { cpf } = event.queryStringParameters;
    return {
      statusCode: 200,
      body: cpf,
    };
  },
};
