export default class DonateForm {
    constructor() {
        this.donateFormHTML = document.createElement('form')
        this.titleHTML = document.createElement('h1')
        this.labelHTML = document.createElement('label')
        this.inputHTML = document.createElement('input')
        this.btnSubmitHTML = document.createElement('button')
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
        this.inputHTML.required = true
        this.btnSubmitHTML.className = 'donate-form__submit-button'
        this.btnSubmitHTML.type = 'submit'

        this.titleHTML.textContent = '28$'
        this.labelHTML.textContent = 'Введите сумму в $'
        this.btnSubmitHTML.textContent = 'Задонатить'

        this.labelHTML.append(this.inputHTML)
        this.donateFormHTML.append(this.titleHTML, this.labelHTML, this.btnSubmitHTML)

        return this.donateFormHTML
    }
}