import React, { useState } from 'react'
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState('2020');

  const filterChangeHandler = selectYear => {
    // console.log('expenses.js', selectYear)
    setFilterdYear(selectYear);
  }
const filteredExpenses = props.item.filter(expense => {
  return expense.date.getFullYear().toString() === filterdYear;
});

  return (
    <Card className="expenses">

 {/* expense filter comp */}

      <ExpensesFilter selected={filterdYear} onChangeFilter={filterChangeHandler} />
      {
  
        filteredExpenses.map((expense) =>
          <ExpenseItem
            key={Math.random() * 10000}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      }

    </Card>
  )
}

export default Expenses