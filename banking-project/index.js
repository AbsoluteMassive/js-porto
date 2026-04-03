import BankAccount from "./bankAccount.js";

const account1 = new BankAccount(1213131, "Jeremy", 100);
const account2 = new BankAccount(1919318, "Sofia", 0);

account1.deposit(400);
account1.withdraw(300);
account1.withdraw(1000);
account1.checkBalance();

account2.withdraw(100);
account2.deposit(200);
account2.checkBalance();
