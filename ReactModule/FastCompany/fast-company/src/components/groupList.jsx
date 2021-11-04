import React from "react"
import PropTypes from "prop-types"

const GroupList = ({
    professions,
    contentProperty,
    idProperty,
    onProfessionSelect,
    currentProfession
}) => {
    return (
        <ul className="list-group">
            {Object.keys(professions).map((professionName) => (
                <li
                    key={professions[professionName][idProperty]}
                    className={
                        "list-group-item" +
                        (currentProfession === professions[professionName]
                            ? " active"
                            : "")
                    }
                    onClick={() => {
                        onProfessionSelect(professions[professionName])
                    }}
                    role="button"
                >
                    {professions[professionName][contentProperty]}
                </li>
            ))}
        </ul>
    )
}

GroupList.defaultProps = {
    idProperty: "_id",
    contentProperty: "name"
}

GroupList.propTypes = {
    professions: PropTypes.object.isRequired,
    contentProperty: PropTypes.string.isRequired,
    idProperty: PropTypes.string.isRequired,
    onProfessionSelect: PropTypes.func.isRequired,
    currentProfession: PropTypes.object
}

export default GroupList
