import React from "react"
import User from "./user"
import PropTypes from "prop-types"

const Users = ({ users, favourites, children, ...funcs }) => {
    return (
        <div className="d-flex flex-column">
            {children[0]}
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
            {children[1]}
        </div>
    )
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    favourites: PropTypes.array.isRequired,
    children: PropTypes.array
}

export default Users
