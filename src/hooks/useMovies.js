import { useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'
import { useRef } from 'react'


export function useMovies({ search, sort }) {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)


// UseMemo for functions || useCallback for values
  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const movies = await searchMovies({ search })
      setMovies(movies)
    } catch (error) {
      setError(error.message)
    } finally {
      // finally will be executed in both the try and the catch
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }

}