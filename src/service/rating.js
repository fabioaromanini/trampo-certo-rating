const AWS = require('aws-sdk');

const dbClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
  getRatingByCpf: async cpf => {
    const response = await dbClient
      .get({
        TableName: process.env.RATINGS_BY_CPF_TABLE,
        Key: { cpf },
      })
      .promise();
    if (response.Item) {
      return response.Item.rating;
    } else return 'unknown';
  },
  setRatingForCpf: async (cpf, rating) => {
    const timestamp = new Date().toISOString();

    return dbClient
      .put({
        TableName: process.env.RATINGS_BY_CPF_TABLE,
        Item: { cpf, rating, createdAt: timestamp },
      })
      .promise();
  },
};
