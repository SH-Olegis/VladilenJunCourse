import React from "react"
import Select from "react-select"
import PropTypes from "prop-types"

const MultiSelectField = ({ options, onChange, name, label }) => {
    const optionsArray = !Array.isArray(options) && typeof options === "object"
        ? Object.keys(options).map(optionName => ({ label: options[optionName].name, value: options[optionName]._id }))
        : options

    const handleChange = (event) => {
        onChange({
            [name]: event
        })
    }

    return (
        <div className="mb-4">
            <label className="form-label">{ label }</label>
            <Select
                isMulti
                closeMenuOnSelect={false}
                className="basic-multi-select"
                classNamePrefix="select"
                options={optionsArray}
                onChange={handleChange}
            />
        </div>
    )
}

MultiSelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
}

export default MultiSelectField
