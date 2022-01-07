import React from "react"
import TableHeader from "./tableHeader"
import TableBody from "./tableBody"
import PropTypes from "prop-types"

const Table = ({ children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader />
                    <TableBody />
                </>
            )}
        </table>
    )
}

Table.propTypes = {
    children: PropTypes.array
}

export default Table
