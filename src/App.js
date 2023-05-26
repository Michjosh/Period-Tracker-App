import React, { useState } from 'react';
import MenstrualCycleInfoModal from './MenstrualCycleInfoModal';
import MenstrualPeriodService from './MenstrualPeriodService';
import './MyComponent.css';

function WelcomePage({ onClick }) {
  return (
    <div className='container'>
      <div className='title'>
        <h1>Welcome To Your Period Tracker</h1>
      </div>
      <div className='start'>
        <button onClick={onClick}>Go with the flow</button>
      </div> 
    </div>
  );
}

function MenuPage({ onCalculatorClick, onCycleInfoClick, onHomePageClick }) {
  const [showCycleInfo, setShowCycleInfo] = useState(false);

  const handleCycleInfo = () => {
    setShowCycleInfo(true);
  }

  const handleCloseCycleInfo = () => {
    setShowCycleInfo(false);
  }

  return (
    <div className='container'>
      <div className='menuTitle'>
        <h1>What would you like to do</h1>
      </div>
      <div className='menuOption'>
        <button onClick={onCalculatorClick}>Check Your Next Menstrual Period</button>
        <button onClick={onCycleInfoClick}>Learn About Menstrual Cycle</button>
        <button onClick={onHomePageClick}>Home Page</button>
      </div> 
      <MenstrualCycleInfoModal isOpen={showCycleInfo} onRequestClose={handleCloseCycleInfo} />
    </div>
  );
}
function CalculatorPage({ onDone }) {
  const [showCycleInfo, setShowCycleInfo] = useState(false);
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [periodLength, setPeriodLength] = useState('');
  const [nextPeriodDate, setNextPeriodDate] = useState('');
  const [estimatedPeriodDates, setEstimatedPeriodDates] = useState([]);

  const handleCalculate = () => {
    if (!lastPeriodDate || !cycleLength || !periodLength) {
      alert('Please fill in all the fields.');
      return;
    }

    const nextDate = MenstrualPeriodService.calculateNextPeriodDate(lastPeriodDate, cycleLength, periodLength);
    const estimatedDates = MenstrualPeriodService.getEstimatedPeriodDates(nextDate, cycleLength, periodLength);
    setNextPeriodDate(nextDate);
    setEstimatedPeriodDates(estimatedDates);
  }


  const handleDone = () => {
    setLastPeriodDate('');
    setCycleLength('');
    setPeriodLength('');
    setNextPeriodDate('');
    setEstimatedPeriodDates([]);
    onDone();
  }

  const handleCycleInfo = () => {
    setShowCycleInfo(true);
  }

  const handleCloseCycleInfo = () => {
    setShowCycleInfo(false);
  }

  return (
    <div className='container'>
      <div className='title'>
        <h1>Hey Lady,</h1>
        <h3>Kindly fill the form below to see the date(s) of your next period</h3>
      </div>
      <div className='form'>
        <label htmlFor='lastPeriodDate'>Last period date:</label>
        <input type='date' id='lastPeriodDate' value={lastPeriodDate} onChange={(e) => setLastPeriodDate(e.target.value)} />

        <label htmlFor='cycleLength'>Cycle length (in days):</label>
        <input type='number' id='cycleLength' value={cycleLength} onChange={(e) => setCycleLength(e.target.value)} />

        <label htmlFor='periodLength'>Period length (in days):</label>
        <input type='number' id='periodLength' value={periodLength} onChange={(e) => setPeriodLength(e.target.value)} />

        <div className='calculate'>
          <button onClick={handleCalculate}>Check your next menstrual period</button>
          <br></br>
          <button onClick={handleCycleInfo}>Learn about menstrual cycle</button>
        </div>

        <MenstrualCycleInfoModal isOpen={showCycleInfo} onRequestClose={handleCloseCycleInfo} />
        <div className='done'>
          <button onClick={handleDone}>Done</button>
        </div>
      </div>

      {nextPeriodDate && (
        <div className='result'>
          <h2>Next period date:</h2>
          <p>{nextPeriodDate}</p>
          {estimatedPeriodDates.map((date) => (
            <li key={date}>{date}</li>
          ))}
        </div>
      )}
    </div>
  );
}


function MyComponent() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showCalculator, setShowCalculator] = useState(false);

  const handleStart = () => {
    setShowWelcome(false);
    setShowCalculator(true);
  };

  const handleDone = () => {
    setShowWelcome(true);
    setShowCalculator(false);
  };

  const handleCalculatorClick = () => {
    setShowCalculator(true);
  };

  const handleCycleInfoClick = () => {
    // handle cycle info click event
  };

  const handleHomePageClick = () => {
    setShowWelcome(true);
    setShowCalculator(false);
  };

  return (
    <>
      {showWelcome ? (
        <WelcomePage onClick={handleStart} />
      ) : showCalculator ? (
        <CalculatorPage onDone={handleDone} />
      ) : (
        <MenuPage
          onCalculatorClick={handleCalculatorClick}
          onCycleInfoClick={handleCycleInfoClick}
          onHomePageClick={handleHomePageClick}
        />
      )}
    </>
  );
}

export default MyComponent;
