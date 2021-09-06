import { Settings } from "../core/constans/settings";
import { getFormattedTime } from "../core/utils/index";

export default class DonateList {
    #donatesContainerHTML
    #titleHTML
    #donatesList

    constructor(donates) {
        this.donates = donates
        this.#donatesContainerHTML = document.createElement('div')
        this.#titleHTML = document.createElement('h2')
        this.#donatesList = document.createElement('div')
    }

    render() {
        this.#donatesContainerHTML.className = 'donates-container'
        this.#titleHTML.className = 'container__title'
        this.#donatesList.className = 'donated-container__donates'

        this.#titleHTML.textContent = 'Список донатов'
        this.renderDonates()
        this.#donatesContainerHTML.append(this.#titleHTML, this.#donatesList)

        return this.#donatesContainerHTML
    }

    renderDonates() {
        this.donates.forEach(donate => {
            const donateHTML = document.createElement('div')
            const formatDate = getFormattedTime(donate.date)
            donateHTML.className = 'donate-item'
            donateHTML.innerHTML = `${formatDate} - <b>${donate.amount}${ Settings.currency }</b>`

            this.#donatesList.append(donateHTML)
        })
    }

    updateDonates(updatedDonates) {
        this.#donatesList.innerHTML = ''
        this.donates = updatedDonates
        this.renderDonates()
    }
}