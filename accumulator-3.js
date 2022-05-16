let languages = ['JS', 'JAVA','C++','PYTHON','C#','PHP', 'golang',' Scratch','ActionScript','Apex']
let accumulator = [];
for (let i = 0; i < languages.length; i++) {
    if(languages[i].length > 3) {
        accumulator.push(languages[i])
    }
}
console.log(accumulator)