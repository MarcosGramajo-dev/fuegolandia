import { motion } from 'framer-motion'
import Logo from './assets/fuegolandia-logo.webp'
import Fire1 from './assets/animations/fireworks_1.gif'
import Fire2 from './assets/animations/fireworks_2.gif'
import Fire3 from './assets/animations/bengala_1.gif'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  const fireGifs = [Fire1, Fire2, Fire3]

  const leftSide = [...fireGifs].sort(() => Math.random() - 0.5)
  const rightSide = [...fireGifs].sort(() => Math.random() - 0.5)

  return (
    <div className="app-container">
      {/* LATERAL IZQUIERDO */}
      {/* <div className="firework-cluster left">
        {leftSide.map((gif, i) => (
          <img key={i} src={gif} className="firework-gif" />
        ))}
      </div> */}

      {/* CONTENIDO PRINCIPAL */}
      <motion.div
        className="main-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={Logo}
          height="150px"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="main-title"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          FUEGOLANDIA
        </motion.h1>

        <motion.h2
          className="main-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          PROXIMAMENTE
        </motion.h2>

        {/* <motion.div
          className="social-icons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="mailto:ventas@tudominio.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </motion.div> */}
      </motion.div>

      {/* LATERAL DERECHO */}
      {/* <div className="firework-cluster right">
        {rightSide.map((gif, i) => (
          <img key={i} src={gif} className="firework-gif" />
        ))}
      </div> */}
    </div>
  )
}

export default App
