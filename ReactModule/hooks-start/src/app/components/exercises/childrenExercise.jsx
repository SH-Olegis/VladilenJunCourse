import React from "react";
import CollapseWrapper from "../common/collapse";

const WrapperComponents = ({ children }) => {
    return React.Children.map(children, (child, childNumber) => {
        return <>
            {childNumber + 1}
            {child}
        </>;
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <WrapperComponents>
                <Component />
                <Component />
                <Component />
            </WrapperComponents>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
