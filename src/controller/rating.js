const ratingService = require('../service/rating');

module.exports = {
  getRatingByCpf: cpf => {
    if (!cpf) {
      throw new Error('400');
    }
    return {
      cpf,
      rating: ratingService.getRatingByCpf(cpf),
    };
  },
};
