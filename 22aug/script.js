class BankAccount{
    constructor(accountno,accountholder,balance)
    {
        this.accountno=accountno;
        this.accountholder=accountholder;
        this.balance=balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance = this.balance+amount;
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Public method to withdraw money from the account
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance = this.balance-amount;
            } 
            else {
                console.log("Insufficient balance.");
            }
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    // Public method to display the current balance
    displayBalance() {
        console.log(this.balance) ;
    }
}
let vansh=new BankAccount("123458","vansh",45000)
let sid=new BankAccount("123456","sid",55000)
let eshaan=new BankAccount("123457","eshaan",65000)
console.log(vansh);
vansh.deposit(40000)
vansh.displayBalance()
vansh.withdraw(70000)
vansh.displayBalance()


console.log(sid);
console.log("deposit")
sid.deposit(45000)
sid.displayBalance()
sid.withdraw(70000)
sid.displayBalance()

console.log(eshaan);
console.log("deposit")
eshaan.deposit(45000)
eshaan.displayBalance()
eshaan.withdraw(70000)
eshaan.displayBalance()



class SavingAccount extends BankAccount{
    constructor(accountno,accountholder,balance)
    {
        super(accountno,accountholder,balance)
    }
    addIntersest(){

        const interest=(0.03*this.balance)
        console.log(interest)
        const newbal=(this.balance+interest)
       this.balance =newbal
    }
    withdraw(amount) 
    {
        
       
 if (amount>4000)
     {
    this.balance -=  amount+150;        
    }
    else
    {
        this.balance -= amount;
    }
        console.log("total reductionoooo")
    
    }

}
console.log("After interest rate")
const inrt=new SavingAccount("6365764576","vansh",80000)
console.log(inrt)
inrt.addIntersest();
inrt.displayBalance();
console.log("after withdraw")
inrt.withdraw(1000)
inrt.displayBalance();


console.log("INRTT")

const inrtt=new SavingAccount("6365764576","sid",87000)
console.log(inrtt)
inrtt.addIntersest();
inrtt.displayBalance();

console.log("after withdraw")
inrtt.withdraw(6000)
inrtt.displayBalance();



console.log("After interest rate")
const inrttt=new SavingAccount("6365764576","eshaan",88000)
console.log(inrttt)
inrttt.addIntersest();
inrttt.displayBalance();








 
 
 

