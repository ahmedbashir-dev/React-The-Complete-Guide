import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");
	const filterChangeHandler = (selectedDate) => {
		setFilteredYear(selectedDate);
	};
	const items = props.items;
	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onFilterSelected={filterChangeHandler}
				/>
				{items.map((item, index) => {
					return (
						<ExpenseItem
							title={item.title}
							amount={item.amount}
							date={item.date}
						/>
					);
				})}
				
			</Card>
		</div>
	);
};

export default Expenses;
