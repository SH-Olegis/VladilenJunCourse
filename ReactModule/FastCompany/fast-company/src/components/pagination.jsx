import React from "react";

const Pagination = ({onChangePage, countPage}) => {
    const renderPages = () => {
        const content = []

        for(let idxPage = 1; idxPage <= countPage; idxPage++) {
            content.push(<li className="page-item" onClick={() => {onChangePage(idxPage)}} key={idxPage}><a className="page-link" href="#">{idxPage}</a></li>)
        }

        return content
    }

    return <nav aria-label="Page navigation example">
        <ul className="pagination">
            {
                renderPages()
            }
        </ul>
    </nav>
}

export default Pagination