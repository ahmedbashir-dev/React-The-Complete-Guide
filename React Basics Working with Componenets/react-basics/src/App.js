
import Expenses from "./components/Expenses/Expenses";

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
	return (
		<div>
			<h2>Let's get started</h2>
      <Expenses items={expenses}/>
		</div>
	);
}

export default App;
