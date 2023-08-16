const arr = ["kanha", "laddu","mohit","rajat","kuldeep"];

console.log(arr);

// arrays has many predefined methods use them wisely
arr.push("some chutiya");
console.log(arr);

// map function of array it is used to tranform the array elements 
// but it not make any changes inside the real array rather then it create a new array
// single parameter so remove paramethesis and also remove return and curly braces as we are only returning.
const new_arr = arr.map(item => item+" Tomar")
console.log(new_arr);

// create an object for each item by the way objects are in list without having and object name like this
/*{ name: 'kanha' },
{ name: 'laddu' },*/
// another way to write it
const sec_arr = arr.map(item => ({name:item}));
// const sec_arr = arr.map((item) => { return {name:item}});

console.log(sec_arr);
