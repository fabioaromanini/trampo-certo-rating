const cpfService = require('../service/cpf');

module.exports = {
  getCpfRating: cpf => {
    return {
      cpf,
      rating: cpfService.getCpfRating(cpf),
    };
  },
};
