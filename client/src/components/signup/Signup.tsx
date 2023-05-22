
import styles from './Signup.module.css'

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

export default function Signup() {

  return (
    <motion.div
      className={`${styles.container} ${container}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <form className={styles.form}>
        <h4>welcome</h4>
        <h1>Sign up</h1>

        <label htmlFor='email'>E-mail</label><br></br>
        <input type='text' id='email' name='email' ></input><br></br>

        <label htmlFor='name'>Name</label><br></br>
        <input type='text' id='name' name='name' ></input><br></br>

        <label htmlFor='phone number'>Phone number</label><br></br>
        <input type='text' id='phone number' name='phone number' ></input><br></br>

        <label htmlFor='password'>Password</label><br></br>
        <input type='password' id='password' name='password' ></input><br></br>

        <label htmlFor='repeat-password'>Repeat password</label><br></br>
        <input type='password' id='repeat-password' name='repeat-password' ></input><br></br>

        <button>Sign up</button>
      </form>
    </motion.div>
  )
}
