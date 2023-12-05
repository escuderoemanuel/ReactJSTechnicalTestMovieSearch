import './ListOfMovies.css'
//import noResults from './mocks/no-results.json'
import PropTypes from 'prop-types'

function ListOfMovies({ movies }) {
  return (
    <ul className='list'>
      {
        movies.map(movie => (
          <li key={movie.id} className='itemList'>
            <img src={movie.poster} alt={`Poster of the movie ${movie.title}`} className='itemImg' />
            <div className='headerCard'>
              <h4 className='titleCard'>{movie.title}</h4>
              <p>[ {movie.year} ]</p>
            </div>

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

