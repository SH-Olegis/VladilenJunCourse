import React, { useState, useRef, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const count = useRef(0);
    const [, setState] = useState(false);

    useEffect(() => {
        count.current++;
        console.log(count.current);
    });

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количесва рендеров</SmallTitle>
            <p onClick={() => setState(prevState => !prevState)} role="button">Test button</p>
        </CardWrapper>
    );
};

export default RenderCountExample;
