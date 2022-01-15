import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props)=>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    //Using single state 
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     selectedDate:''
    // })
    const titleChangeHandler = (e)=>{
        setEnteredTitle(e.target.value);
        
        //This is not a proper way to update multiple states
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:e.target.value
        // })

        //This one is a proper way
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredAmount:e.target.value}
        // });
    }
    const amountChangeHandler = (e)=>{
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:e.target.value
        // })
    }
    const dateChangeHandler = (e)=>{
        setSelectedDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     selectedDate:e.target.value
        // })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        const expenseData = {
            title:enteredTitle,
            amount:+enteredAmount,
            date: new Date(selectedDate)
        }
        setEnteredAmount('');
        setEnteredTitle('');
        setSelectedDate('');
        props.onSaveExpenseData(expenseData);
    }
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={selectedDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancelEditing}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;