import React from 'react'
import { useState } from 'react';
import { AgeCalculatorForm } from './components/AgeCalculatorForm'
import AgeResult from './components/AgeResult';
import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';
import Image from './assets/calendar.svg';

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
        <>
          <div className='absolute left-10 top-20 my-7'>
            <h1 className='text-5xl font-bold tracking-wider my-12 text-center'>Age Calculator</h1>
            <h3 className='text-2xl text-center text-stone-400'>Uncover the Secrets of Time: Calculate Your Age with Precision!</h3>
            <AgeCalculatorForm calculateAge = {calculateAge}/>
            {age && <AgeResult age={age}/> }
          </div>
          <img src={Image} alt='calendar' className='w-1/2 absolute top-0 right-0'/>
           
        </>
    )
};

export default App
