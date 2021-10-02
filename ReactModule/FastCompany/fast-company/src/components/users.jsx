import React from "react"
import User from "./user"
import PropTypes from "prop-types"

const Users = ({ users, favourites, ...funcs }) => {
    return (
        <>
            <table
                className="table"
                style={{ display: users.length === 0 ? "none" : "" }}
            >
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th scope="col" />
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <User
                            key={user._id}
                            favourites={favourites}
                            user={user}
                            {...funcs}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}

Users.propTypes = {
    users: PropTypes.object.isRequired,
    favourites: PropTypes.array.isRequired
}

export default Users
