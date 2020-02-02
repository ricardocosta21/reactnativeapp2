export default class FireData extends React.Component {
    id: Number;
    age: Number;
    wr: Number;
    incGrowth: Number;
    returns: Number;
    investments: Number;
    income: Number;
    spending: Number;
    retSpending: Number;



    constructor(id = 1, age, wr, incGrowth, returns, investments, 
        income, spending, retSpending) {
        this.id = id;
        this.age = age;
        this.wr = wr;
        this.incGrowth = incGrowth;
        this.returns = returns;
        this.investments = investments;
        this.income = income;
        this.spending = spending;
        this.retSpending = retSpending;
    }

    // clone() {
    //     return new FireData(this.id, this.age, this.wr, this.incGrowth, 
    //         this.returns, this.investments, this.income, this.spending, this.retSpending);
    // }
}