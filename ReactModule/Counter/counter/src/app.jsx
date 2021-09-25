import React, {useState} from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

const App = () => {
    const initialCounters = [
        {id: 1, value: 1, name: 'Ложка'},
        {id: 2, value: 2, name: 'Вилка'},
        {id: 3, value: 3, name: 'Тарелка'},
        {id: 4, value: 4, name: 'Стартовый набор минималиста'},
        {id: 5, value: 5, name: 'Ненужные вещи'},
    ]
    const [counters, setCounters] = useState(initialCounters)

    const handleDelete = (id) => {
        const newCounters = counters.filter(counter => counter.id !== id)

        setCounters(newCounters)
    }

    const handleIncrement = (id) => {
        const newCounters = counters.map(counter => {
            if(counter.id === id) counter.value++
            return counter
        })

        setCounters(newCounters)
    }

    const handleDecrement = (id) => {
        const newCounters = counters.map(counter => {
            if(counter.id === id) --counter.value
            return counter
        })

        setCounters(newCounters)
    }

    const handleReset = () => {
        setCounters(initialCounters)
    }

    const totalCount = () => {
        return counters.reduce((a,b) => a+b.value,0)
    }

    return <div className="col-lg-8 mx-auto p-3 py-md-5">
        <main>
            <NavBar totalCount = {totalCount()}/>
            <Counters
                handleDelete={handleDelete}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleReset={handleReset}
                counters={counters}
            />
        </main>
    </div>
}

export default App