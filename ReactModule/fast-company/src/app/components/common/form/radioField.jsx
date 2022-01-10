import React from "react"
import PropTypes from "prop-types"

const RadioField = ({ label, options, onChange, name, value }) => {
    const handleChange = ({ target }) => {
        onChange({
            [target.name]: target.value
        })
    }

    return (
        <div className="mb-4">
            <label className="form-label">{ label }</label>
            <div>
                {
                    options.map(option => {
                        return (
                            <div className="form-check form-check-inline" key={option.name + "_" + option.value}>
                                <input
                                    className="form-check-input"
                                    type="radio" name={name}
                                    id={option.name + "_" + option.value}
                                    value={option.value}
                                    checked={option.value === value}
                                    onChange={handleChange}
                                />
                                <label htmlFor={option.name + "_" + option.value} className="form-check-label">{option.name}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

RadioField.propTypes = {
    label: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
}

export default RadioField
