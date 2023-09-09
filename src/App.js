import Table from './components/Table/Table';
import React from 'react'

const netIncomes = [
  {brand: "McDonalds", income: 1291283},
  {brand: "Burger King", income: 1927361}, 
  {brand: "KFC", income: 1098463}
];

const App = () => {
  return (
    <div>
      <Table netIncomes={netIncomes}/>
    </div>
  )
}

export default App
