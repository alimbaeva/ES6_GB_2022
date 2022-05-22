const formatters = {
    date: {
        token: ':d',
        handler: formatDate,
    },
};

function format(strings, ...values) {
    const parts = [];
    strings.forEach((value, i) => {
        const part = { value: `${strings[i]}` };
        const prevPart = parts[i - 1];
        const next = strings[i + 1];
        // Если в следующей строке есть токен форматирования, применить сщщтветствующий обработчик
        Object.keys(formatters).forEach(function (key) {
            if (next && new RegExp(`^${formatters[key].token}`).test(next)) {
                part.formatter = key;
                part.value += formatters[key].handler(values[i]);
            }
        });
        // Если предидущая использовала форматер, удалить его в текущей строке
        if (prevPart && prevPart.formatter) {
            part.value = part.value.replace(formatters[prevPart.formatter].token, '');
        }

        // Если к строке не был применен ни какой форматер просто добавим интерполирование значения
        if (!part.formatter) {
            part.value += values[i] || '';
        }
        parts.push(part);
    });
    return parts.map(part => part.value).join('');
}

function formatDate(value) {
    const date = new Date(value);
    return [
        `${('0' + (date.getMonth() + 1)).substring(-2)}`,
        `.${('0' + date.getDate()).substring(-2)}`,
        `.${date.getFullYear()}`,
    ].join('');
}

console.log(format`Date range is ${'2019-03-03T14:01:33.505Z'}:d - ${'2019-03-28T07:46:35.805Z'}:d`);

function upFirst(value) {
    return typeof value === 'string' ? value.substring(0, 1).toUpperCase() + value.substring(1) : value;
}

formatters.upFirst = {
    token: ':uf',
    handler: upFirst,
};

console.log(format`My name is ${'pikachu'}:uf 0=0=0=0=0=0`);