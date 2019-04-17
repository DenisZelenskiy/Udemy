let money = prompt ("Ваш бюджет на месяц?");
let time = prompt ("Введите дату в формате YYYY-MM-DD");
let question1 = prompt ("Введите обязательную статью расходов в этом месяце");
let question2 = prompt ("Во сколько обойдется?");
let question3 = prompt ("Введите обязательную статью расходов в этом месяце");
let question4 = prompt ("Во сколько обойдется?");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income:{},
    savings: false
};

appData.expenses.question1 = question2;
appData.expenses.question3 = question4;

let budgetOneDay = alert (money / 30);
console.log(appData);


// 1.7
// 2.console.log()
// 3.&& - и. Должны удовлетворять все условия
//   || - или. Должно удовлетворять хотя бы одно условие