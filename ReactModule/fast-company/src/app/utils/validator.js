export function validator(data, config) {
    const errors = {}

    function validate(validateMethod, data, config) {
        let isValid

        switch (validateMethod) {
        case "isRequired":
        {
            if (typeof data === "boolean") {
                isValid = !data
            } else {
                isValid = !data.trim()
            }
            break
        }
        case "isEmail":
        {
            const emailRegExp = /^\S+@\S+.\S+$/g
            isValid = !emailRegExp.test(data)
            break
        }
        case "isCapitalSymbol":
        {
            const capitalRegExpt = /[A-Z]+/g
            isValid = !capitalRegExpt.test(data)
            break
        }
        case "isContainNumber":
        {
            const containNumberRegExp = /\d+/g
            isValid = !containNumberRegExp.test(data)
            break
        }
        case "min":
        {
            isValid = data.length < config.value
        }
        }

        if (isValid) return config.message
    }

    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod])

            if (error && !errors[fieldName]) {
                errors[fieldName] = error
            }
        }
    }

    return errors
}
