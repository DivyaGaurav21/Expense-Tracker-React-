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

  let expensesContent = <p>No Expenses Found!!</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) =>
      <ExpenseItem
        key={Math.random() * 10000}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    )
  }

  return (

    <Card className="expenses">

      {/* expense filter comp */}

      <ExpensesFilter selected={filterdYear} onChangeFilter={filterChangeHandler} />
      {/* DIFFRENT CONDITIONAL RENDERING  */}

      {/* -->aPPROACH 1  */}
      {/* {
        filteredExpenses.length === 0 ?
          (<p>Expense Not Found.</p>
          ) :
          (filteredExpenses.map((expense) =>
            <ExpenseItem
              key={Math.random() * 10000}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
      } */}

      {/* -->APPROACH 2  */}
      {/* {filteredExpenses.length === 0 && <p>No Expenses Found!</p>}
      {
        filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) =>
          <ExpenseItem
            key={Math.random() * 10000}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      } */}

      {/* -->APPROACH 3 */}
      {expensesContent}
    </Card>
  )
}

export default Expenses