import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { useState } from 'react';

function App() {

    const [expenses, setExpenses] = useState([
        { id: 1, charge: "렌트비", amount: 1000 },
        { id: 2, charge: "교통비", amount: 3000 },
        { id: 3, charge: "식비", amount: 2000 }])

    const [charge, setCharge] = useState("");
    const [amount, setAmount] = useState(0);

    const [edit, setEdit] = useState(false);
    const [id, setId] = useState('');

    const handleDelete = (id) => {
        const newExpenses = expenses.filter(expense => expense.id !== id)
        setExpenses(newExpenses);
    }

    const handleCharge = (e) => {
        setCharge(e.target.value)
    }

    const handleAmount = (e) => {
        setAmount(e.target.valueAsNumber)
    }

    const handleEdit = (id) => {
        const expense = expenses.find(item => item.id === id);
        const { charge, amount } = expense;
        setCharge(charge);
        setAmount(amount);
        setEdit(true);
        setId(id);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (edit) {
            const newExpenses = expenses.map(item => {
                return item.id === id ? { ...item, charge, amount } : item
            })

            setExpenses(newExpenses);
            setEdit(false);
        } else {
            if (charge !== "" & amount > 0) {
                const newExpense = {
                    id: crypto.randomUUID(),
                    charge: charge,
                    amount: amount
                }

                setExpenses([...expenses, newExpense]);
            }
        }

        setCharge("");
        setAmount(0);
    }

    return (
        <main className='main-container'>
            <h1>예산 계산기</h1>
            <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
                <ExpenseForm
                    handleSubmit={handleSubmit}
                    handleCharge={handleCharge}
                    handleAmount={handleAmount}
                    edit={edit}
                    charge={charge}
                    amount={amount}
                />
            </div>
            <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
                <ExpenseList
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    expenses={expenses} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem', fontSize: '2rem' }}>
                <p>
                    총 지출 : <span>
                        {expenses.reduce((acc, curr) => {
                            return acc += curr.amount;
                        }, 0)}원</span>
                </p>
            </div>
        </main>
    );
}

export default App;
