import withResults from '../mocks/results.json'
import noResults from '../mocks/no-results.json'
import { useState } from 'react'
import { API_KEY, PREFIX } from '../constants/constants'


export function useMovies({ search }) {

  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      //setResponseMovies(withResults)
      fetch(`${PREFIX}${API_KEY}&s=${search}`)
        .then(res => res.json())
        .then(json => setResponseMovies(json))
    } else {
      setResponseMovies(noResults)
    }
  }

  return { movies: mappedMovies, getMovies }

}