import moment from "moment";

export const calculateSumOfNumbers = (numbers) => {
    const totalAmount = numbers.reduce((total, amount) => {
        return total += amount
    }, 0)

    return totalAmount
}

export const getFormattedTime = (date) => {
    const newDate = moment(date).format('MMMM Do YYYY, h:mm:ss a')

    return newDate
}