const ratingService = require('../service/rating');

module.exports = {
  getRatingByCpf: async cpf => {
    if (!cpf) {
      throw new Error('400');
    }
    return {
      cpf,
      rating: await ratingService.getRatingByCpf(cpf),
    };
  },
};
