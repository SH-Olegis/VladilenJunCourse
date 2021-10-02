import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"

const Pagination = ({
    onChangePage,
    countUsersOnPage,
    countUsers,
    currentPage
}) => {
    const pageCount = Math.ceil(countUsers / countUsersOnPage)
    const pages = _.range(1, pageCount + 1)

    if (pageCount === 1) return null

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map((idxPage) => {
                    return (
                        <li
                            className={
                                "page-item " + idxPage === currentPage
                                    ? "active"
                                    : ""
                            }
                            onClick={() => {
                                onChangePage(idxPage)
                            }}
                            key={idxPage}
                        >
                            <a className="page-link" href="#">
                                {idxPage}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    onChangePage: PropTypes.func.isRequired,
    countUsersOnPage: PropTypes.number.isRequired,
    countUsers: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default Pagination
