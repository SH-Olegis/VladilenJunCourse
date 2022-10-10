import React, { useState } from "react";
import withPropsStyles from "./withPropsStyles";

const withSimpleComponent = (Component) => (params) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("auth") === "false");
    const ComponentWithPropsStyles = withPropsStyles(Component);
    const handleLogin = () => {
        localStorage.setItem("auth", "false");
        setIsAuth(true);
    };
    const handleLogOut = () => {
        localStorage.setItem("auth", "true");
        setIsAuth(false);
    };

    return (
        <ComponentWithPropsStyles isAuth={isAuth} onLogin={handleLogin} onLogOut={handleLogOut} />
    );
};

export default withSimpleComponent;
