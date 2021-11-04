import React, { useState, useEffect } from "react"
import Users from "./components/users"
import SearchStatus from "./components/searchStatus"
import Pagination from "./components/pagination"
import GroupList from "./components/groupList"
import { paginate } from "./utils/paginate"
import api from "./api/index"

const App = () => {
    const [allUsers, setAllUsers] = useState([])
    const [professions, setProfessions] = useState()
    const countUsersOnPage = 4
    const [currentProfession, setCurrentProfession] = useState()
    const [favourites, setFavourites] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const [filteredUsers, setFilteredUsers] = useState([])

    const [currentUsers, setCurrentUsers] = useState(
        paginate(filteredUsers, currentPage, countUsersOnPage)
    )

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfessions(data)
        })
    }, [])

    useEffect(() => {
        api.users.fetchAll().then((data) => {
            setAllUsers(data)
            const newFilteredUsers = currentProfession
                ? data.filter((user) => user.profession === currentProfession)
                : data

            const newCurrentUsers = paginate(newFilteredUsers, currentPage, countUsersOnPage)

            setFilteredUsers(newFilteredUsers)
            setCurrentUsers(newCurrentUsers)
        })
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [filteredUsers])

    const handleDelete = (id) => {
        const newUsers = allUsers.filter((user) => user._id !== id)
        const newFav = favourites.filter((idFav) => idFav !== id)
        const newFilteredUsers = currentProfession
            ? newUsers.filter((user) => user.profession === currentProfession)
            : newUsers

        const newCurrentUsers = paginate(newFilteredUsers, currentPage, countUsersOnPage)

        setFilteredUsers(newFilteredUsers)
        setCurrentUsers(newCurrentUsers)
        setAllUsers(newUsers)
        setFavourites(newFav)
    }

    const handleToggleBookMark = (id) => {
        if (!favourites.includes(id)) {
            const newFav = [...favourites]
            newFav.push(id)

            setFavourites(newFav)
        } else {
            const newFav = favourites.filter((idFav) => idFav !== id)

            setFavourites(newFav)
        }
    }

    const handleChangePage = (idxPage) => {
        const newCurrentUsers = paginate(
            filteredUsers,
            idxPage,
            countUsersOnPage
        )

        setCurrentUsers(newCurrentUsers)
        setCurrentPage(idxPage)
    }

    const handleProfessionSelect = (profession) => {
        const newFilteredUsers = profession
            ? allUsers.filter((user) => user.profession._id === profession._id)
            : allUsers

        const newCurrentUsers = paginate(newFilteredUsers, 1, countUsersOnPage)

        setCurrentProfession(profession)
        setFilteredUsers(newFilteredUsers)
        setCurrentUsers(newCurrentUsers)
    }

    return (
        allUsers &&
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        professions={professions}
                        onProfessionSelect={handleProfessionSelect}
                        currentProfession={currentProfession}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={() => handleProfessionSelect()}
                    >
                        Очистить
                    </button>
                </div>
            )}
            <Users
                users={currentUsers}
                favourites={favourites}
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
            >
                <SearchStatus countUsers={filteredUsers.length} />
                <div className="d-flex justify-content-center">
                    <Pagination
                        onChangePage={handleChangePage}
                        countUsersOnPage={countUsersOnPage}
                        countUsers={filteredUsers.length}
                        currentPage={currentPage}
                    />
                </div>
            </Users>
        </div>
    )
}

export default App
