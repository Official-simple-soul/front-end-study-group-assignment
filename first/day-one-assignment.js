
// Day one assignment

// One
var string = 'String'
var number = 20
var boolean = true
var object = {name: 'simple', complexion: 'Chocolate'}
var undef = undefined
var empty = null

// Two
console.log(typeof string)
console.log(typeof number)
console.log(typeof boolean)
console.log(typeof object)
console.log(typeof undef)
console.log(typeof empty)

// Three
let firstVar, secondVar;

// Four
const firstName = 'Sherif-deen', lastName = 'Abdur-roheem', maritalStatus = 'Complicated', country = 'Nigeria', age = '28';

// Five
console.log(4 != undefined)
console.log(4 != 5)
console.log(8/2 == 4)

// Six
console.log(4 == undefined)
console.log(4 == 'Four')
console.log(8/2 == 'Five')

// Seven
let add = 8 + 3;
let sub = 8 - 3;
let multiply = 8 * 3;
let divide = 8 / 3;
let remainder = 8 & 3;
let power = 8 ** 3;

// Eight
Boolean(8%2 == 0)


// Nine
true
true
false
false
true
true
false
false
true
false
false
true
false
true
true
false
true
true
false
false
true

// Ten
const myArray = ['Giyu', 'Mubaraq', 'Samad', 'Clint', 'Nutjob']
console.log(myArray.length)
myArray[2] = 'third';
myArray[4] = 5;
console.log(myArray[1])

// Eleven
let myObject = {
    firstName: 'Sherif-deen', 
    lastName: 'Abdur-roheem', 
    maritalStatus: 'Complicated', 
    country: 'Nigeria', 
    age: '28'
}
myObject.country = 'Jand'
console.table(myObject)

// Twelve
// if(a > b){
//     return 'a is greater than b'
// }
// else {
//     return 'a is less than b'
// };

// console.log(a>b?'a iss greater than b':'a is less than b') 

// Thirteen
function myFunction(score){
    if(score >= 80 && score <= 100) {
        return 'A'
    }
    else if(score >= 70 && score <= 79) {
        return 'B'
    }
    else if(score >= 60 && score <= 69) {
        return 'C'
    }
    else if(score >= 50 && score <= 59) {
        return 'D'
    }
    else if(score >= 0 && score <= 49) {
        return 'E'
    };
}
console.log(myFunction(67))

// Fourteen
let month = ''
let season
switch(month) {
    case 'September':
    case 'October':
    case 'November':
        season = 'Autumn'
        break;
    case 'December':
    case 'January':
    case 'Febuary':
        season = 'Winter'
        break;
    case 'March':
    case 'April':
    case 'May':
        season = 'Spring'
        break;
    case 'June':
    case 'July':
    case 'August':
        season = 'Summer'
        break;
    default:
        season = 'Weather in a year'
        break;
}
console.log(season)

// Fifteen
let typeOfday
let day = 'Sunday'
switch(day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        typeOfday = 'Weekday'
        break;
    case 'Saturday':
    case 'Sunday':
        typeOfday = 'Weekend'
        break;
}
console.log(typeOfday)

// Sixteen
const days = (year, month) => new Date(year, month, 0).getDate()
console.log(days(2022, 7))


let daysInMonth
let year = 365
let monthInYear = 'Febuary'
switch(monthInYear) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'Decembere':
        daysInMonth = 31
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        daysInMonth = 30
        break;
    case 'Febuary':
        year == 365?daysInMonth=28:daysInMonth=29
        break;
}
console.log(daysInMonth)
