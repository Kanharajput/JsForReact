const arr = ["kanha", "tomar"];

const [first_name, second_name] = arr;

console.log(first_name);
console.log(second_name);

// destucturing the objects
const user = {
    name: "kanha tomar",
    pass: "123sdfs"
}

// should have the same name as their inside the objects as it not have index no.
// or use alias to change the variable name
const {name: userName,pass} = user;
console.log(userName);
console.log(pass);
