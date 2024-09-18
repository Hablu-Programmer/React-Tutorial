import { useState } from 'react'
import './App.css'
import AddTransaction from './Components/AddTransaction'
import Balance from './Components/Balance'
import Header from './Components/Header'
import IncomeExpenses from './Components/IncomeExpenses'
import TransactionList from './Components/TransactionList'

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction)=> {
    setTransactions([...transactions, transaction])
  }
  
  const calculateBalance = ()=> {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0  )
  }

  const calculateIncome = ()=> {
      return transactions
      .filter((transaction)=> transaction.amount > 0 )
      .reduce((acc, transaction)=> acc + transaction.amount, 0 )
  }

  const calculateExpenses = () => {
    return transactions
    .filter((transaction)=> transaction.amount  < 0 )
    .reduce((acc, transaction)=> acc + transaction.amount, 0 )
  }

  return (
    <>
     <Header />
     <Balance balance={calculateBalance()} />
     <IncomeExpenses income={calculateIncome()}  expense={calculateExpenses()} />
     <TransactionList transactions={transactions} />
     <AddTransaction addTransaction={addTransaction} />
    </>
  )
}

export default App
