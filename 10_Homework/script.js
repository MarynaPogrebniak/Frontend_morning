//Create an object literal representing a bank account
// with properties for account number, account holder name, and balance.
// Add methods for depositing and withdrawing money from the account,
// and a method for checking the balance.

const bankAccount = {
  accountNumber: 12,
  accountHolderName: "Peter",
  balance: 3500,
  deposit: function (sum) {
    this.balance += sum;
    return `New balance after adding money is: ${this.balance}`;
  },
  withdrawalMoney: function (sum) {
    this.balance -= sum;
    return `New balance after withdrawal is: ${this.balance}`;
  },
  checkBalance: function (balance) {
    return `Your balance is: ${balance}`;
  },
};

console.log(bankAccount.deposit(200));
console.log(bankAccount.withdrawalMoney(400));
console.log(bankAccount.checkBalance(bankAccount.balance));
