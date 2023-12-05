
import './App.css'
import { useMovies } from './hooks/useMovies'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { Movies } from './Components/Movies/ListOfMovies'



function App() {
  const { movies } = useMovies()

  return (
    <>
      < Header />
      <main className='main'>
        <form className='form'>
          <label htmlFor="">Enter the name of the movie </label>
          <div className='inputSearch'>
            <input type="text" placeholder='Avengers, Star Wars, ...' />
            <button type='submit'>Search</button>
          </div>
        </form>
        <Movies movies={movies} />
      </main>
      <Footer />

    </>
  )
}

export default App
