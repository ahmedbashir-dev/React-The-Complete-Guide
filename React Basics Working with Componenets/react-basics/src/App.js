import { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = ()=> {
	const expenses = [
		{
			id: 1,
			title: "Car Insurance",
			amount: 247.55,
			date: new Date(2021, 2, 3),
		},
		{
			id: 2,
			title: "Flat Rent",
			amount: 100.25,
			date: new Date(2022, 0, 4),
		},
		{
			id: 3,
			title: "Data Package",
			amount: 200.75,
			date: new Date(2022, 0, 6),
		},
		{
			id: 4,
			title: "Kitchen Essentials",
			amount: 120.55,
			date: new Date(2022, 0, 8),
		},
	];

	const addExpenseHandler = (expense)=>{
		console.log(expense);
	}
	return (
		<div>
			
			<NewExpense onAddExpense = {addExpenseHandler}/>
     		 <Expenses items={expenses}/>
		</div>
	);
}

export default App;
