// set timeout is a function which takes a function as a parameter 
// and time in milliseconds after which it has to execute that function

function handleTimeout(){
    console.log("After 1000")
}

const handleTimeout2 = () => {
    console.log("After 2000")
}

setTimeout(handleTimeout,1000);
setTimeout(handleTimeout2,2000);
setTimeout(() => {console.log("after 3000")}, 3000);

// we can also pass the function as para to user defined functions

function getFunction(func){
    func();
}

// it's parameter contains an anonymous function
getFunction(() => console.log("hi myself Kanha"));