//#1.Object destructuring
// let user={
// name:"sivaji",
// age:20,
// getName(){
//     return 5;
// }
// }
// let {name:ProfileName,age,getName}=user;
// console.log(ProfileName);
// console.log(age);
// console.log(getName());
//#2.Array destructuring
function useState(){
let user1=[
"sivaji",
20,
function getName(){
    return 5;
}
];
return user1;
}
let [name,age,getName]=useState();
console.log(name);
console.log(age);
console.log(getName());