console.log('In script.js');

let month = 'September';
let date = '19';
let year = '2019'

let myAnniversary = month + date + year;

console.log( myAnniversary );
myAnniversary = `your anniversary is on ${month} ${date} ${year}.`

let aniversaryDate = {
    month: 'September',
    date: '19',
    year: '2019',

    attendees: [{
        name: 'adam',
        wearing: ['shoes', 'shirt', 'pants'],
    

    }

    ]
}

//or( let person of aniversaryDate){

//}



let person = {
    name: 'Adam',
    relationship: 'friend',
    age: 30,
    wearing: ['shirt', 'shoes']
}

//input: a person
//output: boolean  (true/false)

function canDrink ( human ){
if(human.age >= 21){
    return true;
}else{
    return false;
}
}

let canAdamDrink = canDrink( person );
console.log('Can Adam Drink?', canAdamDrink);

let canBennyDrink = canDrink({
    name: 'Benny',
    age: 4,
});

console.log('Can Benny Drink?', canBennyDrink);