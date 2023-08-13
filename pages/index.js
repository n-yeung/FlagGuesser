import Head from 'next/head';
import { useState, useEffect } from 'react';
import flagData from '@/flagData';
import FlagDisplay from './api/FlagDisplay';
import gameStyles from '@/styles/gameStyle.module.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const [shuffledFlagsList, setShuffledFlagsList] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [correctFlag, setCorrectFlag] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newHighScore, setNewHighScore] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [showExitButton, setShowExitButton] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      setShuffledFlagsList(shuffleFlags()); //initializes shuffling
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const savedHighScore = localStorage.getItem('highScore'); //to store high score
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore)); 
    }

    const savedPlayerName = localStorage.getItem('playerName');//to store name 
    if (savedPlayerName) {
      setPlayerName(savedPlayerName);
    }
  }, []);

  const login = () => { 
    setIsLoggedIn(true); //for the pages, logged in means in game
  };

  const logout = () => { //logged out is landing page, reset
    setIsLoggedIn(false);
    setInputValue("");
    setCount(0);
    setCorrectFlag(null);
    setNewHighScore(false);
    setShowExitButton(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (!isLoggedIn) {
      login();
    } else {
      if (inputValue.trim().toLowerCase() === shuffledFlagsList[count].toLowerCase()) {
        setCount(count + 1);
        setInputValue("");
        setCorrectFlag(null);
      } else {
        setShowModal(true);
        setCorrectFlag(shuffledFlagsList[count]);
        // Logic for updating high score only on wrong answers
        if (count > highScore) {
          setNewHighScore(true);
        }
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); //modal is the better alert popout box
    logout();
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    const playerName = event.target.nameInput.value;
    if (playerName) {
      localStorage.setItem('playerName', playerName);
      setPlayerName(playerName);
    }
    setNewHighScore(false);
  };

  const shuffleFlags = () => { //shuffle so random showing instead of going through the list in flagData.js
    const initialFlagList = Object.keys(flagData);  //unshuffled list
    const shuffled = initialFlagList.slice();
    for (let i = shuffled.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  //when count increases the index of the list increases in the shuffled list
  //only possible since count is the score meaning starts at 0
  const flagURL = flagData[shuffledFlagsList[count]];

  useEffect(() => {
    if (newHighScore) {
      setHighScore(count);
      localStorage.setItem('highScore', count.toString());
    }
  }, [newHighScore, count]);

  return (
    <div className={gameStyles.container}>
      <Head>
        <title>Flag Guesser</title>
      </Head>

      <div className={gameStyles.gameArea}>
        {isLoggedIn ? ( //if is logged in state or in game or playing
          <div className={gameStyles.gameContent}>
            {isLoggedIn && showExitButton && (
              <div className={gameStyles.header}>
                <h1 className={gameStyles.heading}>
                  Flag Guesser - Currently in play
                </h1>
              </div>
            )}

            <div className={gameStyles.scoreContainer}>
              {/* output score */}
              <h2 className={gameStyles.score}>Score: {count}</h2>
            </div>

            <div className={gameStyles.flagContainer}>
              {/* output flag pic */}
              {flagURL && <img className={gameStyles.flagImage} src={flagURL} alt={shuffledFlagsList[count]} />}
            </div>

            <div className={gameStyles.answerContainer}>
              <div className={gameStyles.answerRow}>
                {/* where you type the answer and click submit for checking */}
                <input className={gameStyles.answerInput} type="text" value={inputValue} onChange={handleInputChange} />
                <button className={gameStyles.submitButton} onClick={handleButtonClick}>Submit Answer</button>
              </div>
              {showExitButton && (
                <div className={gameStyles.exitRow}>
                  {/* just goes back to the landing page, hard reset score is not saved */}
                  <button className={gameStyles.exitButton} onClick={logout}>Exit</button>
                </div>
              )}
            </div>

            {correctFlag && (
              <div className={gameStyles.modal}>
                <div className={gameStyles.modalContent}>
                  {/* modal is like a popup window, same function as alert but customizable */}
                  {newHighScore ? (
                    // checks if there is new high score
                    // asks player to input their name so score and name will be remembered and shown
                    <form onSubmit={handleNameSubmit} className={gameStyles.nameForm}>
                    <label className={gameStyles.modalText}>
                      Congratulations! You've achieved a new high score. <br />
                      Enter your name:
                      <input type="text" name="nameInput" className={gameStyles.nameInput} />
                    </label>
                    <button type="submit" className={gameStyles.submitButton}>Submit</button>
                    </form>
                  ) : (
                    //wrong answer will lead them back to landing page
                    <p className={gameStyles.modalText}>
                      Wrong Answer, the correct answer is {correctFlag}.{" "} <br />
                      <button onClick={handleCloseModal} className={gameStyles.okButton}>OK</button>
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className={gameStyles.highScoreContainer}>
              {playerName && <p className={gameStyles.highScorePrompt}>High Score: {highScore} by {playerName}</p>}
              {!playerName && <p className={gameStyles.highScorePrompt}>High Score: {highScore}</p>}
            </div>
          </div>
        ) : (
          // landing page
          <div className={gameStyles.header}>
            <h1 className={gameStyles.heading}>Welcome to Flag Guesser</h1>
            {/* flag randomizer, looks cool to show  */}
            <FlagDisplay /> 
            {/* this button changes the state and leads to starting game */}
            <button className={gameStyles.startButton} onClick={login}>Click here to start the game</button>

            <div className={gameStyles.instructions}>
              <p>
                <strong>Instructions:</strong><br />
                1. Input the FULL COUNTRY NAME.<br />
                2. Be mindful of proper capitalization and spacing.<br />
                3. Be careful, all progress is reset if the page is reset.<br />
                4. Good Luck and Have Fun!<br />
              </p>
            </div>
          </div>
        )}
      </div>

      <footer className={gameStyles.footer}>
        Created by Nathan Yeung
      </footer>
    </div>
  );
}
