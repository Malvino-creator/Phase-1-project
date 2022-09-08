var object={
    balance: 100,
    income:10000,
    expense: 200,
    transactions: [
        {item: 'Salary', type:'Income', value: '10000'},
        {item: 'Internet', type:'Expense', value: '10000'},
        {item: 'Buy Groceries', type:'Expense', value: '10000'},
        console.log(object)
    ]
}
var balanceEl= document.querySelector('#balance');
var incomeEl= document.querySelector('#income');
var expenseEl= document.querySelector('#object-expense');

function getCalculations() {
    balanceEl.innerHTML= `$$(object.balance)`;
    balanceEl.innerHTML= `$$(object.balance)`;
    expenseEl.innerHTML= `$$(object.balance)`;

}