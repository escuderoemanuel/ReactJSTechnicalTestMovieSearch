
import './App.css'
import responseMovies from './mocks/results.json'
import noResults from './mocks/no-results.json'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  return (
    <body className='page'>
      <Header />
      <main className='main'>
        <form className='form'>
          <label htmlFor="">Enter the name of the movie </label>
          <div className='inputSearch'>
            <input type="text" placeholder='Avengers, Star Wars, ...' />
            <button type='submit'>Search</button>
          </div>
        </form>
        <section className='listSection'>
          {
            hasMovies ? (
              <ul>
                {
                  movies.map(movie => (
                    <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                      <img src={movie.Poster} alt={`Poster of the movie ${movie.Title}`} />
                    </li>
                  ))
                }
              </ul>
            ) : (
              <p>No found movies for this search</p>
            )
          }

        </section>
      </main>
      <Footer />

    </body>
  )
}

export default App
