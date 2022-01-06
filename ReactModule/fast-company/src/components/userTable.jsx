import React from "react"
import PropTypes from "prop-types"
import TableHeader from "./tableHeader"
import TableBody from "./tableBody"
import BookMark from "./bookmark"
import QualitiesList from "./qualitiesList"
import Table from "./table"
import { Link } from "react-router-dom"

const UserTable = ({
    users,
    onSort,
    selectedSort,
    onToggleBookMark,
    onDelete
}) => {
    const columns = {
        name: {
            path: "name",
            title: "Имя",
            component: (user) => {
                return <Link to={`/users/${user._id}`}>{user.name}</Link>
            }
        },
        qualities: {
            title: "Качества",
            component: (user) => {
                return <QualitiesList qualities={user.qualities} />
            }
        },
        professions: {
            path: "profession.name",
            title: "Профессия"
        },
        completedMeetings: {
            path: "completedMeetings",
            title: "Встретился, раз"
        },
        rate: {
            path: "rate",
            title: "Оценка"
        },
        bookmark: {
            path: "bookmark",
            title: "Избранное",
            component: (user) => {
                return (
                    <BookMark
                        status={user.bookmark}
                        onClick={() => onToggleBookMark(user._id)}
                    />
                )
            }
        },
        delete: {
            component: (user) => {
                return (
                    <button
                        className="btn btn-danger"
                        onClick={() => onDelete(user._id)}
                    >
                        delete
                    </button>
                )
            }
        }
    }

    return (
        <Table>
            <TableHeader {...{ selectedSort, onSort, columns }} />
            <TableBody {...{ data: users, columns }} />
        </Table>
    )
}

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default UserTable
