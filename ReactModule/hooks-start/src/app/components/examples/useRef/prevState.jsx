import React, { useState, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const [state, setState] = useState("true");
    const anotherState = useRef("false");
    const handleClick = () => {
        setState(prevState => {
            anotherState.current = prevState;

            return prevState === "false" ? "true" : "false";
        });
    };

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>{state}, {anotherState.current}</p>
            <button className="btn btn-primary" role="button" onClick={handleClick}>Change state</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
