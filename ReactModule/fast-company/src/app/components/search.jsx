import React from "react"

const Search = ({searchWords, onChangeSearch}) => {
    return (
        <div className="input-group">
            <div className="w-100">
                <input type="text" className="w-100" value={searchWords} onChange={onChangeSearch}/>
            </div>
        </div>
    )
}

export default Search
