import React from "react";
import Counter from "./counter";

const Counters = ({handleReset, counters, ...rest}) => {
    return <div>
        <button className="btn btn-primary btn-sm m2" onClick={handleReset}>Сброс</button>
        {
            counters.map(counter => {
                return <Counter
                    key={counter.id}
                    {...counter}
                    {...rest}
                    />
            })
        }
    </div>
}

export default Counters