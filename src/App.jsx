import { useCallback, useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { useMovies } from './hooks/useMovies'
import { Movies } from './Components/Movies/ListOfMovies'
import { useSearch } from './hooks/useSearch'
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      //console.log('debounce', search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  // Method with useRef
  /*const inputRef = useRef()
  const handleSubmit = (event) => {
    event.preventDefault()
    const value = inputRef.current.value
    console.log(value)
  } */

  // Method with Object.fromEntries using few inputs with its name attribute
  /* const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new FormData(event.target))
    console.log(fields)
  } */

  // Submit handler (Form)
  const handleSubmit = (event) => {
    event.preventDefault()
    /* const fields = new FormData(event.target)
    const query = fields.get('query') */
    //console.log({ search })
    getMovies({ search })
  }

  // Input change handler (input form)
  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      < Header />
      <main className='main'>
        <form className='form' onSubmit={handleSubmit}>
          <section className='inputSearch'>
            <div className='searchContainer'>
              <input className='input' onChange={handleChange} value={search} name='query' type="text" id='queryId' placeholder='Avengers, Star Wars, ...' />
              <button className='btnSearch' type='submit'>Search</button>
            </div>
            <div className='filterCheck'>
              <br />
              <input className='checkbox' type="checkbox" onChange={handleSort} checked={sort} />
              <label className='filterLabel' htmlFor='sortId'>Order by Title</label>
            </div>
          </section>
        </form>
        <section className='sectionError'>
          {error && <p className='error'>{error}</p>}
        </section>
        {loading ? <p className='loadingText'>Loading...</p> :
          (movies ? <Movies movies={movies} /> : null)

        }
      </main>
      <Footer />

    </>
  )
}

export default App
