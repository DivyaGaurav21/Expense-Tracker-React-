import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);


  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const stopEditing = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>

      {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing} />}
    </div>
  )
}

export default NewExpense