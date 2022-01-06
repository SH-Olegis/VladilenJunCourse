import React from "react"
import PropTypes from "prop-types"

const TableHeader = ({ selectedSort, onSort, columns }) => {
    const classIcon = selectedSort.order === "asc" ? "down" : "up"

    const handleSort = (item) => {
        if (selectedSort.iter === item) {
            onSort((prevState) => {
                return {
                    ...prevState,
                    order: selectedSort.order === "asc" ? "desc" : "asc"
                }
            })
        } else {
            onSort({
                iter: item,
                order: "asc"
            })
        }
    }

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((columnName) => {
                    return (
                        <th
                            onClick={
                                columns[columnName].path
                                    ? () => handleSort(columns[columnName].path)
                                    : undefined
                            }
                            scope="col"
                            {...{ role: columns[columnName].path && "button" }}
                            key={columnName}
                        >
                            {columns[columnName].title}
                            {selectedSort.iter === columns[columnName].path
                                ? <i className={`bi bi-caret-${classIcon}-fill`}/>
                                : null
                            }
                        </th>
                    )
                })}
            </tr>
        </thead>
    )
}

TableHeader.propTypes = {
    selectedSort: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableHeader
