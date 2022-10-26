import React from 'react'
import Expenses from './components/Expenses';

const App = () => {

  const expenses = [
    {
      id:'e1',
      title: 'Car Insurance',
      amount: '232.12',
      date: new Date(2021 , 2, 21)
    },
    {
      id:'e2',
      title: 'Toilet Room',
      amount: '132.12',
      date: new Date(2018 , 4, 12)
    },
    {
      id:'e3',
      title: 'House Rent',
      amount: '32.12',
      date: new Date(2020 , 7, 7)
    }
  ];

  return (
    <div>

      <h1>Let Started</h1>
    <Expenses item={expenses}/>
   
    </div>
  )
}

export default App
