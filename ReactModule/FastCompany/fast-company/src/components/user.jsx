import React from "react";
import Qualitie from "./qualitie";

const User = ({user, favourites, onDelete, onToggleBookMark}) => {
    const stateBookMark = () => {
        let classes = "bi bi-bookmark"

        if(favourites.includes(user._id)) classes += '-fill'

        return classes
    }

    return <tr key={user._id}>
        <th scope="row">{user.name}</th>
        <td>
            {user.qualities.map((quality) => <Qualitie key={quality._id} quality={quality}/>)}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td><i className={stateBookMark()} onClick={() => onToggleBookMark(user._id)} /></td>
        <td>
            <button
                className="btn btn-danger"
                onClick={() => {
                    onDelete(user._id);
                }}
            >
                delete
            </button>
        </td>
    </tr>
}

export default User