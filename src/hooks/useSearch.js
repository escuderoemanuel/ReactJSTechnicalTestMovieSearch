import { useEffect, useState, useRef } from 'react'

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
    }
    if (search === '') {
      setError('Cannot search for an empty movie')
      return
    }
    if (search.startsWith(' ')) {
      setError('Cannot search for a movie with spaces')
      return
    }
    setError(null)

  }, [search])

  return { search, setSearch, error }
}