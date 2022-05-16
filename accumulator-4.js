let str = ['Amir', 'Viskhan', 'Movsar', 'Ahmad', 'Deni', 'Imran', 'Askhab', 'Tima', 'Israil', 'Djabrail'];

let accumulator = [];
for (let i = 0;i < str.length; i++) {
    if (str[i][0].toLowerCase() === 'a') {
        accumulator.push(str[i])
    }
}