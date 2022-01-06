import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { paginate } from "../utils/paginate"
import Pagination from "./pagination"
import GroupList from "./groupList"
import SearchStatus from "./searchStatus"
import UserTable from "./userTable"
import API from "../api"
import _ from "lodash"

const Users = () => {
    const [users, setUsers] = useState()
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }

    const [currentPage, setCurrentPage] = useState(1)
    const [selectedProf, setSelectedProf] = useState()
    const pageSize = 4
    const [professions, setProfessions] = useState()
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" })

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data))
    }, [])

    useEffect(() => {
        API.professions.fetchAll().then((data) => {
            setProfessions(data)
        })
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark }
                }
                return user
            })
        )
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
    }

    const clearFilter = () => {
        setSelectedProf()
    }

    const handleSort = (item) => {
        setSortBy(item)
    }

    if (users) {
        const filteredUsers = selectedProf
            ? users.filter((item) => _.isEqual(item.profession, selectedProf))
            : users

        const count = filteredUsers.length
        const sortUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order])
        const usersCrop = paginate(sortUsers, currentPage, pageSize)

        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            items={professions}
                            selectedItem={selectedProf}
                            onItemSelect={handleProfessionSelect}
                            contentProperty="name"
                            valueProperty="_id"
                        />
                        <button
                            className="btn btn-secondary m-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    {count > 0 && (
                        <UserTable
                            users={usersCrop}
                            selectedSort={sortBy}
                            onSort={handleSort}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        )
    } else {
        return "loading..."
    }
}
Users.propTypes = {
    users: PropTypes.array
}

export default Users
