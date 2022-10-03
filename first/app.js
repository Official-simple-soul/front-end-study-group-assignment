// const yes = (arr, index) => {
//    return arr.reduce((acc, crr, idx) => {
//         acc[crr] = index[idx]
//         return acc
        
//     }, {})
// }
// console.table(yes(['a','b','c','d'], [1,2,3,4]))
// console.table(yes(['name','class','subject','date'], ['Simple','S.S.3','Biology','24th October']))


// const firstUp = letter => {
//     // return letter.split('').forEach(item => {
//     //     item.toUpperCase()
//     //     return item
//     // });
//     const arr = []
//    let upper = letter.split('')
//    for (let i = 0; i < upper.length; i++){
//     let newnew = upper[i].toUpperCase()
//     if(newnew){
//         arr.push(letter)
//     }
//    }
//    console.log(arr)
// }
// console.log(firstUp('hello'))

// console.log()

// const wat = letter => Array(letter.length).fill(letter)
//     .map(([...item], idx) => (item[idx] = item[idx].toUpperCase()) && item.join('')
// )
// console.log(wat('hello'))


// const queue = (arr, num)  => {
//    normal = new Array(num).fill(0)
// //    console.log(normal)
//    arr.map(person => {
//     let fastest = normal.indexOf(Math.min(...normal))
//     normal[fastest] += person
//    })
//    return Math.max(...normal)
// }
// // queue([10, 2, 3, 3], 2)
// console.log(queue([2, 2, 3, 3], 2))
// queue([2, 2, 3, 10], 2)
// queue([3, 8, 3, 10], 2)

// nn = new Array(2).fill(0)
// const arr = [1,2,3,4,5]
// // let day = [...nn]
// for (gg of arr){
// let idx = nn.indexOf(Math.min(...nn))
// nn[idx] = gg
// console.log(nn)
// }
// console.log(nn[idx] = idx)
// const arr = [6,2,5,1,2,5]
// const jjj = new Array(1).fill([...arr])
// console.log(...jjj)
// const min = jjj.indexOf(Math.min(...jjj))
// console.log(min)
// console.log(jjj.indexOf(Math.min(...jjj)))

// const queue = (arr, num) => {
//     n = new Array(num<=1?1:num).fill(0)
//     arr.map(minutes => {
//         min = n.indexOf(Math.min(...n))
//         n[min] += minutes
//     })
//     return Math.max(...n)
// }
// console.log(queue([9, 3, 6, 6], 3))

// const empty = Array()
const emptyFive = ['day1', 'day2', 'day3', 'day4', 'day5', true, 20, null]
// console.log(emptyFive.length)
// console.log(emptyFive[0])
// console.log(emptyFive[emptyFive.length - 1])
// console.log(emptyFive)

// const myFunction = middle => {
//     let length = middle.sort().length
//     length % 2==1?idx=(length+1)/2:idx=length/2&&(length/2)+1
//     middle = middle[idx]
//     return middle
// }
// console.log(myFunction(emptyFive))

// const myFunction = middle => {
//     if(middle.sort().length % 2 == 1) {
//         idx = (middle.sort().length + 1)/2
//         return middle[idx]
//     }
//     else {
//         idx = (middle.sort().length)/2
//         return middle.sort().slice(idx, idx + 2)
//     }
// }
// console.log(myFunction(emptyFive))


// console.log(emptyFive.splice(3, 2))


// console.log(arr = ['google', 'amazon', 'facebook', 'microsoft', 'brew'].sort().map(arrs => 
//     arrs[0].toUpperCase() + arrs.slice(1, arrs.length-1) + arrs[arrs.length-1].toUpperCase()))

// const tarr = ['google', 'amazon', 'facebook', 'microsoft', 'brew']

// const caseCap = cap =>  cap.map(element => element.toUpperCase())
// console.log(caseCap(arr))

// console.log(Math.floor(7/2))


// const filt = arr => {
//     const rrr = []
//     for(let i = 0; i < arr.length; i++) {
//         let spl = arr[i].split('')
//         console.log(spl)
//         if(spl.indexOf('o') > 1){
//             rrr.push(spl.join())
//         }
//     }
// return rrr
// }
// console.log(filt(arr))




// const median = (arr, mid = Math.floor(arr.length/2)) => arr.length % 2 == 1?arr[mid]:arr.slice(mid-1, mid+1).toString();
// console.log(median(emptyFive))


// let names = 'Salam'

// if('salam'.includes('a')) {
//     console.log('yes')
// }

// console.log('salam'.indexOf('a'))

// const arr = ['google', 'amazon', 'facebook', 'microsoft', 'brew'].sort()

// const zero = zer => zer.map(company => {
//     const lett = []
//     let result = []
//     for(let i = 0; i < company.length; i++) {
//         if(company[i] === 'o') {
//             lett.push(company)
//             if(lett.length > 1){
//                 result = lett[0]
//             }
//         }
//     }
//     return result
// })
// console.log(zero(arr))

// const zero = zers => zers.filter(letter => {
//     if(letter.split('o').length - 1 === 2) {
//         return letter
//     }
// })
// console.log(zero(arr))


// const arrs = arr => arr.map(item => item.split('o').length -1 > 2?item:arr.pop(item))
// console.log(arrs(arr))

// const day = ['monday', 'tuesday', 'wednesday', 'thursday']

// console.log(day.sort().reverse())

// const dd = day.map(gg => gg.split('a'))
// console.log(dd)


// let input = [
//     { name: "John", age: 21, city: "New York" },
//     { name: "Mike", age: 28, city: "Moscow" },
//     { name: "Danny", age: 30, city: "London" },
//     { name: "Lisa", age: 26, city: "Paris" },
//     { name: "Sophie", age: 19, city: "Berlin" },
//   ];

//   function names(arr) {
//     const namesArray = []
//     for (i = 0; i < arr.length; i++){
//         // console.log(arr[i])
//         namesArray.push(arr[i].name)
//     }
//     return namesArray;
//     }
//     console.log(names(input))

  
//   const values = (val, ppty) => val.map(item => item[ppty])

//  console.log(values(input, 'name'))
//  console.log(values(input, 'age'))
//  console.log(values(input, 'city'))



// const rotate = (text, n) => text.slice(n).concat(text.slice(0, n))
// console.log(rotate('javascript', 2))

// const date = (date1, date2) => {
//     let aa = new Date(date1)
//     let bb = new Date(date2)
//     return Math.floor((aa.getTime() - bb.getTime())/(1000*3400*24))
// }
// console.log(date('09/11/2021','08/10/2021'))


// class Lesson {
//     constructor(name) {
//         this.name = name;
//         this.age = 7;
//         this.legs = 4;
//         this.color = 'Brown';
//     }
//     get _name() {
//         return this.name;
//     }
//     get _age() {
//         return this.age;
//     }
//     get _legs() {
//         return this.legs;
//     }
//     get _color() {
//         return this.color;
//     }
// }

// const sub = new Lesson('Tobi')
// console.log(sub)

// class Dog {
//     constructor(name) {
//       this._name = name;
//       this._behavior = 0;
//     }
  
//     get name() {
//       return this._name;
//     }
//     get behavior() {
//       return this._behavior;
//     }   
  
//     incrementBehavior() {
//       this._behavior ++;
//     }
//   }
//   const halley = new Dog('Halley');
//   console.log(halley.name); // Print name value to console
//   console.log(halley.behavior); // Print behavior value to console
//   halley.incrementBehavior(); // Add one to behavior
//   console.log(halley.name); // Print name value to console
//   console.log(halley.behavior); // Print behavior value to console

// console.log(4 == 4)