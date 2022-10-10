import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const divRef = useRef();
    const handleChange = () => {
        console.log(divRef.current);
        divRef.current.style.width = 80 + "px";
        divRef.current.style.height = 150 + "px";
        divRef.current.innerHTML = "Text";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                ref={divRef}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                onClick={handleChange}
            >
                <small>Блок</small>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
