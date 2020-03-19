// TODO: Import Mongoose here
var mongoose = require('mongoose');
// TODO: Connect to mongo here
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
// TODO: Replace `{}` with actual Movie model
const Movie = mongoose.model('Movie', new mongoose.Schema({}))

const getMovieList = async () => {
  return await Movie.find({})
}

const resolvers = {
    Query: {
      movies: async () =>  {
        const movieList = await getMovieList()
        return movieList
      }
    },
  };
  
export default resolvers;