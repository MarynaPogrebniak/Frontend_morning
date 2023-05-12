//Create an object literal representing a bank account
// with properties for account number, account holder name, and balance.
// Add methods for depositing and withdrawing money from the account,
// and a method for checking the balance.

// модальное окно
// alert('Hello!');

const bankAccount = {
  accountNumber: 12,
  accountHolderName: "Peter",
  balance: 3500,
  deposit: function (sum) {
    sum > 60000
      ? alert("Требуется подтверждение легальности доходов")
      : (this.balance += sum);
    return `New balance after adding money is: ${this.balance}`;
  },
  withdrawalMoney: function (sum) {
    sum <= this.balance
      ? (this.balance -= sum)
      : alert("Вы не можете снять сумму больше Вашего баланса");
    return `New balance after withdrawal is: ${this.balance}`;
  },
  checkBalance: function () {
    return `Your balance is: ${this.balance}`;
  },
};

let res = Object.keys(bankAccount);
console.log(res);
const [number, holderName, balance] = Object.values(bankAccount);
console.log(number, holderName, balance);
res = Object.entries(bankAccount);
console.log(res);


console.log(bankAccount.checkBalance(bankAccount.balance));
console.log(bankAccount.deposit(6600));
console.log(bankAccount.withdrawalMoney(400));
console.log(bankAccount.checkBalance());
