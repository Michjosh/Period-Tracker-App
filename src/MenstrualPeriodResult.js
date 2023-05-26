import React from 'react';
import Modal from 'react-modal';
import './MyComponent.css';


Modal.setAppElement('#root');

const MenstrualCycleResult = ({ isOpen, onRequestClose }) => {
    return (
      <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Menstrual Cycle Information'
      >


{nextPeriodDate && (
    <div className='result'>
      <h2>Next period date:</h2>
      <p>{nextPeriodDate}</p>
      {estimatedPeriodDates.map((date) => (
        <li key={date}>{date}</li>
      ))}
    </div>
  )}
     </Modal>
  );
};
