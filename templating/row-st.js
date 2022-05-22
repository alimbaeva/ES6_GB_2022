const newLine = String.row`This string has new line \n`;
console.log(newLine === "This string has new line \n"); // false
console.log(newLine === "This string has new line \\n"); // true

const withUnicode = String.row`\u{61}`; // \u{61} - юникод обозначения для латинской - а
console.log(withUnicode === 'a'); // false
console.log(withUnicode === '\\u{61}'); // true
