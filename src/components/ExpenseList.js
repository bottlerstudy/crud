import React from 'react'
import ExpenseItem from './ExpenseItem'
import '../styles/ExpenseList.css'

const ExpenseList = ({ expenses, handleDelete, handleEdit }) => {

    return (
        <>
            <ul className='list'>
                {
                    expenses.map(expense => {
                        return <ExpenseItem handleEdit={handleEdit} handleDelete={handleDelete} key={expense.id} expense={expense} />
                    })
                }
            </ul>
            <button className='btn'>
                목록 지우기
            </button>
        </>
    )
}

export default ExpenseList
