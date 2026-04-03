class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    };
    deposit(sum) {
        if (sum <= 0) {
            console.log("Please add a positive quantity greater than 0.");
            
        } else {
           this.balance += sum;
           console.log(this.accountHolder + " has deposited: " + sum + " pounds." + " Current balance: " + this.balance + " pounds"); 
        };
    }
    withdraw(sum) {
        if (sum > this.balance) {
            console.log("Not enough funds. " + this.accountHolder + " Current balance: " + this.balance);
        } else {
            this.balance -= sum;
            console.log(sum + " pounds have been taken. " + this.accountHolder + " Current balance: " + this.balance);
        }
    }
    checkBalance() {
        console.log("This is " + this.accountHolder + " current balance: " + this.balance);
    }
}

export default BankAccount;