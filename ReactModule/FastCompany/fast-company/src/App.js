import React, {useState} from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import Pagination from "./components/pagination";
import api from './api/index'

const App = () => {
    const initialUsers = api.users.fetchAll()
    const [allUsers] = useState(initialUsers)
    const [favourites, setFavourites] = useState([])
    const [users, setUsers] = useState(initialUsers.slice(0, 4))
    const [countPage, setPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)
    const countUsers = allUsers.length

    const handleDelete = (id) => {
        const newUsers = users.filter((user) => user._id !== id);
        const newFav = favourites.filter(idFav => idFav !== id)

        setUsers(newUsers);
        setFavourites(newFav)
    };

    const handleToggleBookMark = (id) => {
        if(!favourites.includes(id)) {
            const newFav = [...favourites]
            newFav.push(id)

            setFavourites(newFav)
        } else {
            const newFav = favourites.filter(idFav => idFav !== id)

            setFavourites(newFav)
        }
    }

    const handleChangePage = (idxPage = currentPage) => {
        let newUsers = null

        const actionPages = {
            1: function () {
                newUsers = allUsers.slice(0,4)
            },
            2: function () {
                newUsers = allUsers.slice(4, 8)
            },
            3: function () {
                newUsers = allUsers.slice(8, 12)
            }
        }

        actionPages[idxPage]()
        setCurrentPage(idxPage)
        setUsers(newUsers)
    }

    return <div>
        <SearchStatus countUsers={countUsers}/>
        <Users users={users} favourites={favourites} onDelete={handleDelete} onToggleBookMark={handleToggleBookMark}/>
        <Pagination  onChangePage={handleChangePage} countPage={countPage}/>
    </div>
}

export default App