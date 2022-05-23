// console.group('Как досеучатся до поля с данными');
// {
//     window.check = function (object) {
//         //Как досеучатся до поля с данными
//         const frame = window.frames[0];
//         console.log(window === frame.window); // false
//         console.log(object instanceof Object); // false
//         console.log(frame.Array === Array); // false
//         console.log(frame.Symbol === Symbol); // false
//     };
// const ifame = document.createElement('iframe');
// ifame.srcdoc = `<script>
// const obj={[Symbol('test)]: 'data};
// window.parent.check(obj);
// </script>`;
// document.body.append(ifame);
// }


{
    window.check = function (object) {
        console.log(Symbol.keyFor(Symbol.for('test')));
        console.log(object[Symbol.for('test')]);
    };
    const ifame = document.createElement('iframe');
    ifame.srcdoc = `<script>
    const obj={[Symbol.for('test)]: 'data};
    window.parent.check(obj);
    </script>`;
    document.body.append(ifame);
}