import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import './NewExpense.css';
const NewExpense = (props)=>{
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    const startEditingHandler = ()=>{
        setIsEditing(true);
    }
    const stopEditingHandler = ()=>{
        setIsEditing(false);
    }

    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancelEditing = {stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
}

export default NewExpense;