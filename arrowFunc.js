// it will also be an arrow function as it doesn't contain any name and function tag
export default (name, message) => {
    console.log(name + " " + message);
}

/*
() => {
    return "nothing";
}
*/
/*
More on arrow function
if there only a parameter then we can remove the paranthesis, 
if there's no logic only a return statement then we can remove the return as well as curly brackets.

// we want to create an object and return it in anonymous function so wrap it inside the curly bracket and then it will be noted as object otherwise js understand it as the anonumous function defination
/* Example
() => ({ age: number })

*/ 