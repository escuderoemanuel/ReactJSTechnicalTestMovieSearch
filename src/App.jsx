import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { useMovies } from './hooks/useMovies'
import { Movies } from './Components/Movies/ListOfMovies'
import { useSearch } from './hooks/useSearch'

function App() {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })

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
    getMovies()
  }

  // Input change handler (input form)
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      < Header />
      <main className='main'>
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor="">Enter the name of the movie </label>
          <div className='inputSearch'>
            <input onChange={handleChange} value={search} name='query' type="text" placeholder='Avengers, Star Wars, ...' />
            <button type='submit'>Search</button>
          </div>
        </form>
        <section className='sectionError'>
          {error && <p className='error'>{error}</p>}
        </section>
        <Movies movies={movies} />
      </main>
      <Footer />

    </>
  )
}

export default App
