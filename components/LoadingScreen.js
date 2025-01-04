// components/LoadingScreen.js
import styles from '../styles/LoadingScreen.module.css';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className={styles.loadingContainer}>
      <motion.div
        className={styles.loader}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <p>Dicas: Explore os perfis do Discord e Roblox!</p>
    </div>
  );
};

export default LoadingScreen;
