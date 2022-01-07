import React from "react"
import Users from "./components/users"
import NavBar from "./components/navBar"
import Main from "./components/main"
import Login from "./components/login"
import { Route } from "react-router-dom"

function App() {
    return (
        <div>
            <NavBar />
            <Route path="/" exact component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/users/:userId?" component={Users} />
        </div>
    )
}

export default App
