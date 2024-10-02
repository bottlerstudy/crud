import React from 'react'
import '../styles/ExpenseForm.css'

const ExpenseForm = ({ charge, amount, edit, handleCharge, handleAmount, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-center'>
                <div className='form-group'>
                    <label htmlFor='charge'> 지출 항목 </label>
                    <input
                        type='text'
                        id='charge'
                        className='form-control'
                        name='charge'
                        placeholder='에) 렌트비'
                        value={charge}
                        onChange={handleCharge}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='amount'> 비용 </label>
                    <input
                        type='number'
                        id='amount'
                        className='form-control'
                        name='amount'
                        placeholder='에) 100'
                        value={amount}
                        onChange={handleAmount}
                    />
                </div>
            </div>
            <button type='submit' className='btn'>
                {edit ? "수정" : "제출"}
            </button>

        </form>
    )
}

export default ExpenseForm
