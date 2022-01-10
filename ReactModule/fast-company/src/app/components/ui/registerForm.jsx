import React, { useState, useEffect } from "react"
import TextField from "../common/form/textField"
import SelectField from "../common/form/selectField"
import RadioField from "../common/form/radioField"
import MultiSelectField from "../common/form/multiSelectField"
import CheckboxField from "../common/form/checkboxField"
import { validator } from "../../utils/validator"
import API from "../../api"

const RegisterForm = () => {
    const [errors, setErrors] = useState({})
    const [professions, setProfession] = useState()
    const [qualities, setQualities] = useState()

    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        gender: "male",
        qualities: [],
        license: false
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
        },
        profession: {
            isRequired: {
                message: "Профессия обязательна для выбора"
            }
        },
        license: {
            isRequired: {
                message: "Обязательно для выбора"
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

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfession(data))
        API.qualities.fetchAll().then(data => setQualities(data))
    }, [])

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
            <SelectField
                label="Выберите вашу профессию"
                defaultOption="Choose..."
                error={errors.profession}
                options={professions}
                name="profession"
                value={data.profession}
                onChange={handleChange} />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                label="Выберите пол"
                value={data.gender}
                name="gender"
                onChange={handleChange}
            />
            <MultiSelectField options={qualities} onChange={handleChange} name="qualities" label="Выберите свои качества"/>
            <CheckboxField
                onChange={handleChange}
                value={data.license}
                name="license"
                error={errors.license}
            >
                Подтвердить <a href="">лицензионное соглашение</a>
            </CheckboxField>
            <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">Submit</button>
        </form>
    )
}

export default RegisterForm
