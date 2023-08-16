// spread operator is used to merge the two list or ojects items into one.
const students = ["kanha","gopal","mohit"];
const patidar = ["kuldeep", "rajat"];

// it will create a nested array
const friends = [students, patidar];      
// create a single list with both list items
const real_frnds = [...students, ...patidar];

const user ={
    name: "kanha",
    pass: "skfsj2432"
}

// spread operator with objects
const extendedUser ={
    isAdmin: true,
    ...user
}

console.log(extendedUser);


console.log(friends);
console.log(real_frnds);