import React from 'react';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseItem from './components/list/ExpenseItem';
import ExpenseList from './components/list/ExpenseList';
import AddExpenseForm from './components/forms/AddExpense';
import {AppProvider} from './context/AppContext';
const App = () => {
  return (
    <AppProvider>
    <div className="container">
      <h1 className="mt-3">Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
         <Budget/>
        </div>
        <div className="col-sm">
          <Remaining/>
        </div>
        <div className="col-sm">
          <ExpenseTotal/>
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList/>
        </div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <AddExpenseForm/>
        </div>
      </div>
    </div>
    </AppProvider>
  );
};
export default App;