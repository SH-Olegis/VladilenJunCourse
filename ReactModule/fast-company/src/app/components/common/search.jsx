import React from "react"
import PropTypes from "prop-types"

const Search = ({ searchWords, onChangeSearch }) => {
    return (
        <div className="input-group">
            <div className="w-100">
                <input type="text" className="w-100" value={searchWords} onChange={onChangeSearch}/>
            </div>
        </div>
    )
}

Search.propTypes = {
    searchWords: PropTypes.string,
    onChangeSearch: PropTypes.func
}

export default Search
