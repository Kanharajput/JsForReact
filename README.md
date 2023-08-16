- package.json file is necessary also add type: module inside it so that node js will conclude this folder as the module and
    let us use import and export.

- Javascript has 4 types of variables named String, Number, Boolean, Null & Undefined.
    - can't use whitespace , dash (-) and alphanumeric characters except $ and underscore( _ ) can be used in defining a
        vaiable name.

- Have all the operators(=, <=, >=, <,>, !=) which we have in other programming languages. Only difference is === to check equality.

- Arrow function , functions which are without function tag and also without function name. This are also known as arrow 
    function. Mostly use when we have to write a few lines of code inside the function then creating a function and calling it will be a cumbersome. while the simple solution is to use a anonymous function and directly defined some few
    lines of code inside the component or we want that function

- Arrays are just as normal as other programming languages.

- Destructure array like we do in python where we assign mulitple values at the same time here it use it with array, 
- Destructuring with objects will let us to use the field name of objects not like arrays first variable is assigned to 
    index 0, second var is assigned to index 1 and so on. 

- Also we can destructure the function parameters like this
    - function login({id, pass}), call it like this login(user) or login({id:1, pass:"3eq4sdf"});
    - user is object which has the variables id, pass, last_login, is_admin etc but only acquire the needed one. 

- Passing function as function parameter in js we are not bound to only pass values inside the function parameter but also 
    we can pass function as a parameter and the function which got function in a parameter can run it when it's needed.

- In react : function inside a function is a pretty common thing in react, but it's not in js. The interior function are only
    call inside the function not from outside of the function.

- Primitive and Refrence variables. Primitive  variables don't store the address of the memore where the data is stored they 
    store the actual values that's why if the primitive variable is const then we can't edit it but this is not the case
    in Refrence variable , refrence variable stores the address of the data so that we can make change to it . In js 
    array and objects are the refrence variables. Basically const specify that we can't change the memory address but can change the value at that memory address.