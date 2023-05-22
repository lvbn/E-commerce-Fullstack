import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0, 0.71, 0.2, 1.01],
      delayChildren: 0.1,
      staggerChildren: 0.07
    }
  }
};

export default function Login() {

  const navigate = useNavigate()

  return (
    <motion.div
    className={`${styles.container} ${container}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <form className={styles.form}>
        <h4>welcome</h4>
        <h1>Log in</h1>

        <label htmlFor='email'>E-mail</label><br></br>
        <input type='text' id='email' name='email' ></input><br></br>

        <label htmlFor='password'>Password</label><br></br>
        <input type='password' id='password' name='password' ></input><br></br>

        <p>forgot your password?</p>

        <button>Log in</button>
      </form>

      <p>or</p>

      <button
        onClick={() => navigate('/signup')}
      >
        Sign up
      </button>
    </motion.div>
  )
}
