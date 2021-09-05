import DonateForm from "./donate-form";
import DonateList from "./donate-list";

export default class App {
    run() {
        const donateForm = new DonateForm()
        const donateList = new DonateList()

        document.body.append(donateForm.render())
        document.body.append(donateList.render())
    }
}