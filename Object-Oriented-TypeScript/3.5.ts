{
    //Access Modifier

    class BankAccount {
        public readonly id : number;
        public name: string;
        // private _balance: number;
        protected _balance : number; 
        //Private - cant access the balance the StudentAccount
        //Protected - can access the balance 

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposite(amount: number){
            this._balance = this._balance + amount
        }

        getBalance(){
            return this._balance
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            
        }
    }


    //create instance of bankaccount
    const randomAccount = new BankAccount(111, 'Mr. Riyal', 100)
    randomAccount.addDeposite(300);
    const myBalance = randomAccount.getBalance();
    console.log(myBalance)



}