import React from "react";

const Counter = ({value, id, name, onDelete, onIncrement, onDecrement}) => {
    const formValue = () => {
        return value === 0 ? "Ноль" : value
    }

    const getBagecClasses = () => {
        let classes = "badge m-2 bg-"
        classes += value === 0 ? 'danger' : 'primary'
        return classes
    }

    return (
        <div>
            <h4>{name}</h4>
            <h3 className={getBagecClasses()}>{formValue()}</h3>
            <button onClick={() => {onIncrement(id)}} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => {onDecrement(id)}} className="btn btn-secondary btn-sm">Decrement</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => {onDelete(id)}}>Delete</button>
        </div>
    )
}

export default Counter