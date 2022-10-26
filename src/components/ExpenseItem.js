import React from 'react'

import './ExpenseItem.css'

const ExpenseItem = () => {
    const expenseDate = new Date(2021 , 2 , 22);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.04;

  return (
    <div className="expense-item">
        {expenseDate.toISOString()}
    <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
    </div>
</div>
  )
}

export default ExpenseItem