
import React from 'react'

const Table = ({netIncomes}) => {
    const average = netIncomes.reduce((accumulator, netIncomes) => accumulator + netIncomes.income , 0) / netIncomes.length ;
  return (
    <div>
      <table border = "1">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Ingreso Neto</th>
            </tr>
        </thead>
        <tbody>
            {netIncomes.map((item) => (
                <tr>
                    <td>{item.brand}</td>
                    <td>{item.income}</td>
                </tr>
            ))}
        </tbody>
      </table>
      <p>El promedio de los ingresos neto es: {average}</p>
    </div>
  )
}

export default Table
