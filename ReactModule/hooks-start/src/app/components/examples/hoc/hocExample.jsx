import React from "react";
import Component from "./someComponent";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";
import withPropsStyles from "./withPropsStyles";
import withSimpleComponent from "./withSimpleComponent";
import SimpleComponent from "./simpleComponent";

const HOCExample = () => {
    const ComponentWithAuth = withLogin(Component);
    const ComponentWithStylesProps = withPropsStyles(Component);
    const ComponentSimple = withSimpleComponent(SimpleComponent);

    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWithAuth name="Test"/>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <ComponentWithStylesProps name="Test styles props" anotherParam="aasdasd"/>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>5. Exercise</SmallTitle>
                <ComponentSimple />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
