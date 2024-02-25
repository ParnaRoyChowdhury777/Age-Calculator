import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AgeCalculatorForm = ({calculateAge}) => {
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        calculateAge(date);
    };

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
    
        
        if (month < 10) {
          month = '0' + month;
        }
        if (day < 10) {
          day = '0' + day;
        }
    
        return `${year}-${month}-${day}`;
      };

    
    
    return (
    <div>
    <form onSubmit={handleSubmit} className='flex-col'>
        <input type='date' className='block mx-auto my-10 p-3 border-2 border-gray-300 rounded-md cursor-text' value={date} onChange={e => setDate(e.target.value)} max={getCurrentDate()}/>
        <button type="submit" className='block mx-auto p-2 bg-green-600 text-white rounded-md hover:bg-green-900 cursor-pointer' disabled = {!date}>Calculate Age</button>
    </form>
    </div>
  );
};

AgeCalculatorForm.propTypes = {
    calculateAge: PropTypes.func.isRequired,
};
