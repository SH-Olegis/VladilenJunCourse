import React from "react";
import Counter from "./counter";

const Counters = ({onReset, counters, ...funcs}) => {
    return (
        <div>
            <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
            {
                counters.map(counter => (
                    <Counter
                        key={counter.id}
                        {...counter}
                        {...funcs}
                    />
                ))
            }
        </div>
    )
}

export default Counters