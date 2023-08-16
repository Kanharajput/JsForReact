// only access id, pass from the user object
function login({ id, pass }) {
    console.log(id + pass);        
}

const user = {
    id: 1,
    name: "kanha",
    pass: "sfdrer332"
}

login({ id:1, pass:"sdfsdf2334", name: "kanha"});
// or 
login(user);
