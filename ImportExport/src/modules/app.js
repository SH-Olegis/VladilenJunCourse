import DonateForm from "./donate-form";
import DonateList from "./donate-list";
import * as utils from "../core/utils/index";

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
];

export default class App {
    constructor() {
        this.state = {
            donates: mockDonates,
            totalAmount: 0
        }
        this.checkNowTotalAmount()
        this.donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this))
        this.donateList = new DonateList(this.state.donates)
    }

    checkNowTotalAmount() {
        if(!this.state.donates) return

        const amounts = this.state.donates.map(donate => donate.amount)
        this.state.totalAmount = utils.calculateSumOfNumbers(amounts)
    }

    createNewDonate(newDonate) {
        this.state.donates.push(newDonate)
        this.state.totalAmount += newDonate.amount
        this.donateForm.updateTotalAmount(this.state.totalAmount)
        this.donateList.updateDonates(this.state.donates)
    }

    run() {
        document.body.append(this.donateForm.render())
        document.body.append(this.donateList.render())
    }
}