const ratingService = require('../service/rating');

const validRatings = ['good', 'bad'];

module.exports = {
  getRatingsByCpf: async (cpf, history) => {
    if (!cpf) {
      throw new Error('400');
    }
    return {
      cpf,
      rating: await ratingService.getRatingsByCpf(cpf, history),
    };
  },
  setRatingForCpf: async (cpf, rating) => {
    console.log(`Setting rating ${rating} for ${cpf}`);
    if (!cpf || !rating) throw new Error('400');
    if (validRatings.indexOf(rating) === -1 || typeof cpf !== 'string') throw new Error('403');

    return ratingService.setRatingForCpf(cpf, rating);
  },
};
