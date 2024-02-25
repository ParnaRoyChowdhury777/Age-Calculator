import React from 'react'
import { useState } from 'react';
import { AgeCalculatorForm } from './assets/components/AgeCalculatorForm'
import AgeResult from './assets/components/AgeResult';
import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

const App = () => {

    const [age, setAge] = useState(null);

    const calculateAge = (date) => {
        const today = new Date();
        const birthDate = new Date(date);
        const ageYears = differenceInYears(today, birthDate);
        const ageMonths = differenceInMonths(today, birthDate);
        const ageDays = differenceInDays(today, birthDate);
        setAge({
          years: ageYears,
          months: ageMonths,
          days: ageDays,
        });
    };
    return (
        <div>
          <h1 className='text-4xl font-bold tracking-wider my-12 text-center'>Age Calculator</h1>
          <h3 className='text-xl text-center text-stone-400'>Uncover the Secrets of Time: Calculate Your Age with Precision!</h3>
          <AgeCalculatorForm calculateAge = {calculateAge}/>
          {age && <AgeResult age={age}/> }
        </div>
    )
};

export default App
