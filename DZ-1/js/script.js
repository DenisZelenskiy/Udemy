
let money;
let time;


function start() {
        money = +prompt("Ваш бюджет на месяц?", '');
        time = prompt("Введите дату в формате YYYY-MM-DD", '');

        while(isNaN(money) || money === "" || money === null) {
                money = +prompt("Ваш бюджет на месяц?", '');
        };
};

start();

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function() {
                for (let i = 0; i < 2; i++) {
                        let a = prompt("Введите обязательную статью расходов в этом месяце");
                        let b = prompt("Во сколько обойдется?");
                        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
                                console.log("done");
                                appData.expenses[a] = b;
                        } else {
                                alert('Заполните все поля!');
                                i--;
                        }
                };
        },

        detectDayBudget: function() {
                appData.moneyPerDay = (appData.budget / 30).toFixed();
                alert('Ежедневный бджет: ' + appData.moneyPerDay);
        },
        detectLevel: function () {
                if(appData.moneyPerDay < 100) {
                        console.log('Минимальный уровень достатка');
                }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
                        console.log('Средний уровень достатка');
                }else if (appData.moneyPerDay > 2000) {
                        console.log('Высокий уровень достатка');
                }else {
                        console.log('Произошла ошибка');
                }
        },
        checkSevings: function () {
                if(appData.savings === true) {
                        let save = +prompt('Какова сумма накоплений?'),
                        percent = +prompt('Под какой процент?');
        
                        appData.monthIncome = save/100/12*percent;
                        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
                }
        },
        chooseOptExpenses: function () {
                for (let i = 0; i < 3; i++) {
                        let a = prompt('Статья необязательных расходов?');
        
                        if (typeof (a) === 'string' && typeof (a) != null && a != "" && a.length < 50) {
                                appData.optionalExpenses[i+1] = a;
                        }
                }
        },

        chooseIncome: function () {
                let items = prompt ('Что принесет дополнительный доход? (Перечислити через запятую)', '');
                if (typeof (items) === 'string' && items !== '' && items !== null) {
                        appData.income = items.split(',');
                        appData.income.push(prompt('Может что то еще?'));
                        appData.income.sort();
                } else{
                        alert('Введите правильно!');
                        i--;
                };
                this.income.forEach(function(item,i){
                        alert('Способ дополнительного зароботка: ' + (i+1) + '-' + item );
                })
                
        },

};

appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSevings();
appData.chooseOptExpenses();
appData.chooseIncome();


for (let prop in appData) {
        console.log('Наша программа включает в себя данные: ' + prop);
};




// WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }


// DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);