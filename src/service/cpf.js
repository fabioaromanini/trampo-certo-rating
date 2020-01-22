const allowedValues = ['good', 'bad', 'unkown'];

module.exports = {
  getCpfRating: cpf => {
    const randomInt = Number.parseInt(Math.random() * 100);
    return allowedValues[randomInt % 3];
  },
};
