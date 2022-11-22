import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enterdTitle, setEnteredTitle] = useState('');
    const [enterdAmount, setEnteredAmount] = useState('');
    const [enterdDate, setEnteredDate] = useState('');

    // ALTERNATE APPROACH FOR CHANGING STATE 
    // const [userInput , setUserInput] = useState({
    //     enterdTitle:'',
    //     enterdAmount: '',
    //     enterdDate:''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // ALTERNATE
        // setUserInput((prevState) => {
        //     return {...prevState , enterdTitle: event.target.value};
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        //ALTERNATE
        // setUserInput((prevState) => {
        //     return {...prevState , enterdAmount: event.target.value};
        // })
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // ALTERNATE
        // setUserInput((prevState) => {
        //     return {...prevState , enterdDate: event.target.value};
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault()
    const expenseDate = {
        title : enterdTitle,
        amount : +enterdAmount,
        date : new Date(enterdDate)
    }
    // console.log(expenseDate)
    props.onSaveExpenseData(expenseDate)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>

            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value = {enterdTitle}  onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" min='0.01' step='0.01' value = {enterdAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" min='2019-01-01' max='2023-12-31' value={enterdDate} onChange={dateChangeHandler} />
                </div>
            </div>


            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>Cancle</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm