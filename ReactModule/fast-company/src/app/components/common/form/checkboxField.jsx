import React from "react"
import PropTypes from "prop-types"

const CheckboxField = ({ name, value, onChange, children, error }) => {
    const handleChange = ({ target }) => {
        console.log(target.name)
        onChange({
            [target.name]: !value
        })
    }

    const getInputClasses = () => {
        return "form-check-input " + (error ? "is-invalid" : "")
    }

    return (
        <div className="form-check mb-4">
            <input className={getInputClasses()} type="checkbox" id={name} value={value} name={name} onChange={handleChange}/>
            <label className="form-check-label" htmlFor={name}>{ children }</label>
            { error && <div className="invalid-feedback">{ error }</div> }
        </div>
    )
}

CheckboxField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    error: PropTypes.string
}

export default CheckboxField
