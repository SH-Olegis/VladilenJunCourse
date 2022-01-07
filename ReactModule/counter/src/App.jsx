import React, {useState} from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

const App = () => {
    const initialCounters = [
        {value: 0, id: 1, name: 'Вилка'},
        {value: 4, id: 2, name: 'Ложка'},
        {value: 0, id: 3, name: 'Стартовый набор минималиста'},
        {value: 0, id: 4, name: 'Ножик'},
    ]
    const [counters, setCounters] = useState(initialCounters)

    const handleDelete = (id) => {
        const newCounters = counters.filter(counter => counter.id !== id)

        setCounters(newCounters)
    }

    const handleReset = () => {
        setCounters(initialCounters)
    }

    const handleIncrement = (id) => {
        const newCounters = [...counters]
        const newCounterId = counters.findIndex(counter => counter.id === id)
        newCounters[newCounterId].value++

        setCounters(newCounters)
    }

    const handleDecrement = (id) => {
        const newCounters = [...counters]
        const newCounterId = counters.findIndex(counter => counter.id === id)
        newCounters[newCounterId].value > 0 && newCounters[newCounterId].value--

        setCounters(newCounters)
    }

  return (
      <div className="col-lg-8 mx-auto p-3 py-md-5">
        <main>
            <NavBar totalItems={counters.reduce((a,b) => a+b.value, 0)}/>
            <Counters
                counters={counters}
                onReset={handleReset}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
            />
        </main>
      </div>
  );
}

export default App;
