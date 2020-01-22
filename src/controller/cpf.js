const cpfService = require('../service/cpf');

module.exports = {
  getCpfRating: cpf => {
    if (!cpf) {
      throw new Error('400');
    }
    return {
      cpf,
      rating: cpfService.getCpfRating(cpf),
    };
  },
};
