import React, { useState } from "react"
import Users from "./components/users"
import SearchStatus from "./components/searchStatus"
import Pagination from "./components/pagination"
import { paginate } from "./utils/paginate"
import api from "./api/index"

const App = () => {
    const [allUsers] = useState(api.users.fetchAll())
    const countUsersOnPage = 8
    const countUsers = allUsers.length
    const [favourites, setFavourites] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentUsers, setCurrentUsers] = useState(
        paginate(allUsers, currentPage, countUsersOnPage)
    )

    const handleDelete = (id) => {
        const newUsers = currentUsers.filter((user) => user._id !== id)
        const newFav = favourites.filter((idFav) => idFav !== id)

        setCurrentUsers(newUsers)
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
        const newCurrentUsers = paginate(allUsers, idxPage, countUsersOnPage)

        setCurrentUsers(newCurrentUsers)
        setCurrentPage(idxPage)
    }

    return (
        <div>
            <SearchStatus countUsers={countUsers} />
            <Users
                users={currentUsers}
                favourites={favourites}
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
            />
            <Pagination
                onChangePage={handleChangePage}
                countUsersOnPage={countUsersOnPage}
                countUsers={countUsers}
                currentPage={currentPage}
            />
        </div>
    )
}

export default App
