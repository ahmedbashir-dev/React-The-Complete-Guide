import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("all");
	const filterChangeHandler = (selectedDate) => {
		setFilteredYear(selectedDate);
	};

	const items = props.items;
	const filteredExpenses = items.filter((expense) => {
		if(filteredYear === 'all'){
			return items;
		}
		return expense.date.getFullYear().toString() === filteredYear;
	});


	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onFilterSelected={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses}/>
				<ExpensesList items={filteredExpenses}/>
			</Card>
		</div>
	);
};

export default Expenses;
