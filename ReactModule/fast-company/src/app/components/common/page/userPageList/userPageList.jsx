import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { paginate } from "../../../../utils/paginate";
import Pagination from "../../pagination";
import API from "../../../../api";
import GroupList from "../../groupList";
import SearchStatus from "../../../ui/searchStatus";
import UserTable from "../../../ui/usersTable";
import _ from "lodash"
import Search from "../../search";

const UserPageList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfession] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" })
    const pageSize = 8
    const [searchWords, setSearchWords] = useState("")

    const [users, setUsers] = useState()
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data))
    }, [])
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }
    const handleToggleBookMark = (id) => {
        const newArray = users.map((user) => {
            if (user._id === id) {
                return { ...user, bookmark: !user.bookmark }
            }
            return user
        })
        setUsers(newArray)
    }

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfession(data))
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
        setSearchWords("")
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }
    const handleSort = (item) => {
        setSortBy(item)
    }

    const clearFilter = () => {
        setSelectedProf()
        setSearchWords("")
    }

    const handleChangeSearch = ({ target }) => {
        setSelectedProf()

        setSearchWords(target.value)
    }

    useEffect(() => {
        if (searchWords.length && currentPage !== 1) {
            setCurrentPage(1)
        }
    }, [searchWords])

    if (users) {
        const searchedUsers = searchWords
            ? users.filter(user => {
                return user.name.match(searchWords)
            })
            : users

        const filteredUsers = selectedProf
            ? searchedUsers.filter(
                (user) =>
                    JSON.stringify(user.profession) ===
                    JSON.stringify(selectedProf)
            )
            : searchedUsers

        const count = filteredUsers.length
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        )
        const usersCrop = paginate(sortedUsers, currentPage, pageSize)

        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            {" "}
                            Очиститть
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    <Search searchWords={searchWords} onChangeSearch={handleChangeSearch}/>
                    {count > 0 && (
                        <UserTable
                            users={usersCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
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
    }
    return "loading..."
}
UserPageList.propTypes = {
    users: PropTypes.array
}

export default UserPageList