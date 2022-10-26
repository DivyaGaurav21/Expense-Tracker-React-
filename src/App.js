import React from 'react'
import ExpenseItem from './components/ExpenseItem'

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
    <ExpenseItem
    title = {expenses[0].title}
    amount = {expenses[0].amount}
    date = {expenses[0].date}
    />
    <ExpenseItem
    title = {expenses[1].title}
    amount = {expenses[1].amount}
    date = {expenses[1].date}
    />
    <ExpenseItem
    title = {expenses[2].title}
    amount = {expenses[2].amount}
    date = {expenses[2].date}
    />
   
    </div>
  )
}

export default App
