
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {


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
          Render
        </section>
      </main>
      <Footer />

    </body>
  )
}

export default App
