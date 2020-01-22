const AWS = require('aws-sdk');

const dbClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
  getRatingsByCpf: async (cpf, history) => {
    const response = await dbClient
      .query({
        TableName: process.env.RATINGS_BY_CPF_TABLE,
        KeyConditionExpression: '#c = :cpf',
        ExpressionAttributeNames: {
          '#c': 'cpf',
        },
        ExpressionAttributeValues: {
          ':cpf': cpf,
        },
        ScanIndexForward: false,
      })
      .promise();
    if (response.Items.length === 0) {
      return history ? [] : 'unkown';
    }

    if (history) {
      return response.Items.map(item => ({ rating: item.rating, createdAt: item.createdAt }));
    } else {
      return response.Items[0].rating;
    }
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
