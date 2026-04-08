import BankAccount from "./bankAccount.js";

const account1 = new BankAccount(1213131, "Jeremy", 100);
const account2 = new BankAccount(1919318, "Sofia", 0);
//withraw and deposit
account1.deposit(400);
account1.withdraw(300);
account1.withdraw(1000); // nott enough funds
//withraw and deposit
account2.withdraw(100); // not enough funds
account2.deposit(200);
//check lalance
account1.checkBalance(); // 200
account2.checkBalance(); // 200
// transfer
account1.transfer(200, account2);
account2.transfer(150, account1);
account1.transfer(100, account1);
