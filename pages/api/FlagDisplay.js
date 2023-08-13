import { useState, useEffect } from 'react';
import flagData from '@/flagData';
import styles from '@/styles/Home.module.css';
import gameStyles from '@/styles/gameStyle.module.css';

const flagChangeInterval = 2000; // Change flag every 2 seconds

const FlagDisplay = () => {
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);

  useEffect(() => {
    // Change the displayed flag every few seconds when logged out
    const interval = setInterval(changeDisplayedFlag, flagChangeInterval);
    return () => clearInterval(interval);
  }, []);

  const changeDisplayedFlag = () => {
    setCurrentFlagIndex((prevIndex) => (prevIndex + 1) % Object.keys(flagData).length);
  };

  return (
    <div className={styles['flag-container']}>
      {Object.keys(flagData).length > 0 && (
        <img
          className={gameStyles.flagImage}
          src={flagData[Object.keys(flagData)[currentFlagIndex]]}
          alt={Object.keys(flagData)[currentFlagIndex]}
        />
      )}
    </div>
  );
};

export default FlagDisplay;
