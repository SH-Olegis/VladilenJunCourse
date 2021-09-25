import React from "react";

const Counter = ({value, name, id, handleDelete, handleIncrement, handleDecrement}) => {
    const stateTitle = () => {
        let classes = "badge m-2 bg-";
        classes += value === 0 ? "danger" : "primary";

        return classes;
    };

    return (
        <div>
            <h4>{name}</h4>
            <h1 className={stateTitle()}>Counter {value}</h1>
            <button onClick={() => {handleIncrement(id)}} className="btn m-1 btn-secondary btn-sm">Increment</button>
            <button onClick={() => (value === 0 ? "" : handleDecrement(id))} className="btn m-1 btn-secondary btn-sm">
                Decrement
            </button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => {handleDelete(id)}}>Delete</button>
        </div>
    );
};

export default Counter;