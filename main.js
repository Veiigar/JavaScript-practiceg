// В этом файле я храню задачки которые я придумал сам для себя.

/* Калькулятор */

// Обявили функцию 'calc' с двумя параметрами 'a' и 'b'.
function calc(a, b) {
    
    // Модальное окно которое принимает значение, и исходя от него будут выполняться определённые инструкции в условии ниже.
    let que = prompt('Введите математическую операцию которую вы желаете совершить.', '');

    // Полученные данные в переменную 'que' преобразуются в нижний регистр с помощью первой функции. 
    // А с помощью второй убираются пробелы в начале и в конце.
    que = que.toLowerCase().trim();
    
    // Два модальных окна которые принимают цифровые значения для математической операции.
    a = +prompt('Введите первое значение.', '');
    b = +prompt('Введите второе значение.', '');

    // Условия, которые выполняются в зависимости от того какие данные получило модальное окно 'que'.
    if (!a || !b) {
        return 'Ошибка. Одно из значений некорректное!';
    } else if (que == '+' || que == 'сложение' || que == 'додавання') {
        return a + b;
    } else if (que == '-' || que == 'вычитание' || que == 'віднімання') {
        return a - b;
    } else if (que == '*' || que == 'умножение' || que == 'множення') {
        return a * b;
    } else if (que == '/' || que == 'разделение' || que == 'ділення') {
        return a / b;
    } else {
        return 'Ошибка.';
    }

}

// Возврат конечных значений функции в консоль.
console.log(calc());