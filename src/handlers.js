module.exports = {
  cpfQuery: async event => {
    console.log(event);
    return {
      statusCode: 200,
      body: 'foo',
    };
  },
};
