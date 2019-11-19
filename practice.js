team = [Manager = {
    name: 'William Mao' ,
    position: 'Manager' ,
    id: '1' ,
    email: 'youremail@email.com' ,
    office: '16B' ,
},
Engineer = {
    name: 'Gary Boober' ,
    position: 'Engineer' ,
    id: '2' ,
    email: 'youremail1@email.com' ,
    office: '16A' ,
},
Intern = {
    name: 'Teddy Tester' ,
    position: 'Intern' ,
    id: '8' ,
    email: 'youremail2@email.com' ,
    office: '16C' ,
},

function print(team) {
    for (var i = 0; i <team.length; i++) {
        for (var key in team[0]) {
            console.log(key.value);
        }
    }   
}
// using Print(team)
var arr = [];
Object.keys(team[0]).forEach(function (key){
    arr.push(team[0][key]);
});
for(var i=4; i<arr.length; i++) {
    console.log(arr[i])
}
