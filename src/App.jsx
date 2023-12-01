
import './App.css'

function App() {


  return (
    <body className='page'>
      <header className='header'>
        <h1>Technical Test: Movie Search</h1>
      </header>
      <main className='main'>
        <form className='form'>
          <label htmlFor="">Enter the name of the movie </label>
          <div className='inputSearch'>
            <input type="text" placeholder='Avengers, Star Wars, The Matrix ...' />
            <button type='submit'>Search</button>
          </div>
        </form>
        <section className='listSection'>
          Render
        </section>
      </main>
      <footer className='footer'>
        Footer
      </footer>

    </body>
  )
}

export default App
