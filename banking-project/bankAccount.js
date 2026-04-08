class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    };
    deposit(sum) {
        if (sum <= 0) {
            console.log("Please add a positive quantity greater than 0.");
            
        } else {
           this.balance += sum;
           console.log(this.accountHolder + " has deposited: £" + sum + " Current balance: £" + this.balance); 
        };
    }
    withdraw(sum) {
        if (sum > this.balance) {
            console.log("Not enough funds. " + this.accountHolder + " Current balance: " + this.balance);
        } else {
            this.balance -= sum;
            console.log(sum + " pounds have been taken. " + this.accountHolder + " Current balance: £" + this.balance);
        }
    }
    checkBalance() {
        console.log("This is " + this.accountHolder + " current balance: £" + this.balance);
    }
    transfer(sum, anotherAccount) { 
        if (this.accountHolder === anotherAccount.accountHolder) {
            console.log("You can not transfer to yourself. Please choose a valid account");

        } else if (sum <= 0) {
            console.log("Please add a positive sum greater than 0.");

        } else if (sum > this.balance) {
            console.log("Not enough funds. " + this.accountHolder + " Current balance: £" + this.balance);

        } else {
            this.balance -= sum;
            anotherAccount.balance += sum;
            console.log(this.accountHolder + " has transferred: £" + sum + " to " + anotherAccount.accountHolder + 
                ". " + anotherAccount.accountHolder + " current is balance: £" + anotherAccount.balance);
        }
      
    }
}

export default BankAccount;