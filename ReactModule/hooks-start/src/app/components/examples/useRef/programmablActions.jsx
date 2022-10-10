import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammablActionsExample = () => {
    const textAreaRef = useRef();

    const handleClick = (event) => {
        console.log(textAreaRef.current);
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title" onClick={handleClick}>
                Программируемые действия и свойства
            </SmallTitle>
            <textarea name="#" id="#" cols="30" rows="10" ref={textAreaRef} onFocus={handleClick}/>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
