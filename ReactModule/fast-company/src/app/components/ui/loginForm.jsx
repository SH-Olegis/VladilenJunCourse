import React, { useState, useEffect } from "react"
import TextField from "../common/form/textField"
import CheckboxField from "../common/form/checkboxField"
import { validator } from "../../utils/validator"

const LoginForm = () => {
    const [errors, setErrors] = useState({})

    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    })

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email заполнен неверно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы 1 заглавную букву"
            },
            isContainNumber: {
                message: "Пароль должен содержать хотя бы 1 цифру"
            },
            min: {
                message: "Пароль должен иметь длину минимум в 8 символов",
                value: 8
            }
        }
    }

    const handleChange = (target) => {
        setData(prevState => {
            return {
                ...prevState,
                ...target
            }
        })

        console.log(data)
    }

    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)

        setErrors(errors)

        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (event) => {
        event.preventDefault()

        const isValid = validate()

        if (!isValid) return

        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField label="Email" name="email" value={data.email} onChange={handleChange} error={errors.email}/>
            <TextField label="Password" type="password" name="password" value={data.password} onChange={handleChange} error={errors.password}/>
            <CheckboxField value={data.stayOn} name="stayOn" onChange={handleChange}>Оставаться в системе</CheckboxField>
            <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">Submit</button>
        </form>
    )
}

export default LoginForm
