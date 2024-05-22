import React,{useState} from 'react';

import NewExpense from './Components/NewExpense/NewExpense';

import Expenses from "./Components/Expenses/Expenses";

let DUMMY_EXPENSE = [
    {
        id:'e1',
        title: 'school Fee',
        amount: 250,
        date: new Date(2021, 5, 12)
    },
    {
        id:'e2',
        title: 'books',
        amount: 230,
        date: new Date(2021, 6, 22)
    },
    {
        id:'e3',
        title: 'hostel fee',
        amount: 880,
        date: new Date(2021, 12, 2)
    },
    {
        id:'e4',
        title: 'Food',
        amount: 150,
        date: new Date(2021, 8, 7)
    }
];

const App = () => {
    
    const[expenses, setExpenses] = useState( DUMMY_EXPENSE);

    const addExpenseHandler = (expense) =>{
        const updateExpense = [expense, ...expenses]
        setExpenses(updateExpense);
    }


    return (
        <div>
           <NewExpense onAddExpense={addExpenseHandler} />
           <Expenses item={expenses}/>
        </div>
    );
}

export default App;