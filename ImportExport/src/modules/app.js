import DonateForm from "./donate-form";
import DonateList from "./donate-list";

export default class App {
    constructor() {
        this.state = {
            donates: [],
            totalAmount: 0
        }
        this.donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this))
        this.donateList = new DonateList(this.state.donates)
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