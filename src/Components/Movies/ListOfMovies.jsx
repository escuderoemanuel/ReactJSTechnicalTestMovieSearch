import './ListOfMovies.css'
//import noResults from './mocks/no-results.json'
import PropTypes from 'prop-types'

function ListOfMovies({ movies }) {
  return (
    <ul className='list'>
      {
        movies.map(movie => (
          <li key={movie.imdbID} className='itemList'>
            <div className='headerCard'>
              <h4 className='titleCard'>{movie.Title}</h4>
              <p>[ {movie.Year} ]</p>
            </div>
            <img src={movie.Poster} alt={`Poster of the movie ${movie.Title}`} className='itemImg' />
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResults() {
  return (
    <p>No found movies for this search</p>
  )
}
ListOfMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

