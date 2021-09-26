import React, {useState} from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from './api/index'

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    const countUsers = users.length
    const [favourites, setFavourites] = useState([])

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

    return <div>
        <SearchStatus countUsers={countUsers}/>
        <Users users={users} favourites={favourites} onDelete={handleDelete} onToggleBookMark={handleToggleBookMark}/>
    </div>
}

export default App