function welcome() {
    
    return "Hello World";
};

function evenOrOdd(n) {
    
    if (n % 2 === 0) {

        return "even";

    } else {
        return "odd";

    }
};

console.log(evenOrOdd(2));
console.log(evenOrOdd(13));


function greeting(name) {
    return "Hola, " + name + "!";
}

const names = ["Sukaina", "persona", "Laura"];


for (let i = 0; i < names.length; i++) {
greeting(names[i]);
}

export { evenOrOdd, greeting, welcome }