import * as constans from "../core/constans/settings";

export default class DonateForm {
    constructor(totalAmount, createNewDonate) {
        this.totalAmount = totalAmount
        this.createNewDonate = createNewDonate
        this.donateFormHTML = document.createElement('form')
        this.titleHTML = document.createElement('h1')
        this.labelHTML = document.createElement('label')
        this.inputHTML = document.createElement('input')
        this.btnSubmitHTML = document.createElement('button')
    }

    initEvents() {
        this.donateFormHTML.addEventListener('submit', this.createDonate.bind(this))
    }

    createDonate(event) {
        event.preventDefault()

        const amount = +this.inputHTML.value

        const donate = {
            date: new Date(),
            amount
        }

        this.createNewDonate(donate)
    }

    render() {
        this.donateFormHTML.className = 'donate-form'
        this.titleHTML.id = 'total-amount'
        this.labelHTML.className = 'donate-form__input-label'
        this.inputHTML.className = 'donate-form__donate-input'
        this.inputHTML.name = 'amount'
        this.inputHTML.type = 'number'
        this.inputHTML.max = '100'
        this.inputHTML.min = '0'
        this.inputHTML.value = ''
        this.inputHTML.required = true
        this.btnSubmitHTML.className = 'donate-form__submit-button'
        this.btnSubmitHTML.type = 'submit'

        this.titleHTML.textContent = this.totalAmount + constans.Settings.currency
        this.labelHTML.textContent = `Введите сумму в ${ constans.Settings.currency }`
        this.btnSubmitHTML.textContent = 'Задонатить'

        this.labelHTML.append(this.inputHTML)
        this.donateFormHTML.append(this.titleHTML, this.labelHTML, this.btnSubmitHTML)

        this.initEvents()

        return this.donateFormHTML
    }

    updateTotalAmount(newAmount) {
        this.totalAmount = newAmount
        this.titleHTML.textContent = this.totalAmount + constans.Settings.currency
        this.inputHTML.value = ''
    }
}