function highlight(strings, ...values) {
    console.group('Params');
    console.log(strings);
    console.log(values);
    console.groupEnd();

    return strings.reduce((acc, cur, ind) => {
        const value = values[ind] ? `<span class="highlight">${values[ind]}</span>` : '';
        return `${acc}${cur}${value}`;
    }, '');
}

const card = { user: "Jhon", score: 50 };

const el = document.createElement('div');
el.innerHTML = highlight`Hello ${card.user}, yore score is: ${card.score}`;
document.body.append(el);