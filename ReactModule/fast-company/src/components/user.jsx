import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import QualitiesList from "./qualitiesList"
import { useHistory } from "react-router-dom"
import API from "../api"

const User = ({ id, users }) => {
    const history = useHistory()
    const [user, setUser] = useState()

    useEffect(async () => {
        const dataUser = await API.users.getById(id)
        setUser(dataUser)
    }, [])

    const handleCheckAllUsers = () => {
        history.replace("/users")
    }

    return (
        <>
            {user
                ? (<>
                    <h1>{user.name}</h1>
                    <h2>{user.profession.name}</h2>
                    <QualitiesList qualities={user.qualities} />
                    <p>completedMeetings: {user.completedMeetings}</p>
                    <h4>Rate: {user.rate}</h4>
                    <button onClick={handleCheckAllUsers}>
                        Все пользователи
                    </button>
                </>
                )
                : (<h1>Loading</h1>)}
        </>
    )
}

User.propTypes = {
    id: PropTypes.string,
    users: PropTypes.array.isRequired
}

export default User
