import React from 'react';
import MedicationList from './MedicationList';
import PomodoroList from './PomodoroList';

function MainPage() {
  return (
    <div className='main'>
      <h1>ADHD (DIS)ORDER</h1>
      <p>Trying to help, if you remember it :)</p>
      <MedicationList />
      <PomodoroList />
    </div>
  );
}

export default MainPage;
