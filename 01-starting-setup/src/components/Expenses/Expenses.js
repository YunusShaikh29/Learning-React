import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  // const [filterInfoText, setFilterInfoText] = useState('2019,2020,2021,2022')

  // derived value/computed value:
  // let filterInfoText = '2019,2020,2021,2022'
  // if(filteredYear === '2019'){
  //   filterInfoText ='2020,2021,2022,2023'
  // }else if(filteredYear === '2020'){
  //   filterInfoText ='2019,2021,2022,2023'
  // }else if(filteredYear === '2021'){
  //   filterInfoText ='2019,2020,2022,2023'
  // }else if(filteredYear === '2022'){
  //   filterInfoText ='2019,2021,2021,2023'
  // }else{
  //   filterInfoText ='2019,2020,2021,2022'
  // }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        {/* <p>Data for years {filterInfoText} is hidden</p> */}
        {props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
        {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
      </Card>
    </div>
  );
};

export default Expenses;
