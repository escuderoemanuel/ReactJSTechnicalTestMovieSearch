import './Footer.css'
import devIcon from '../../assets/dev/Logo2023.png'

const urlDev = 'https://emanuelescudero.ar'
export default function Footer() {
  return (
    <footer className='footer'>
      <section className='footerContainer'>
        <p>Developed by Emanuel Escudero</p>
        <a href={urlDev} target='_blank' rel='noopener noreferrer'>
          <img className='devIcon' src={devIcon} alt="Developer's logotype" />
        </a>
      </section>
    </footer>
  )
}
