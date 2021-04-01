const fs = require('fs')

// const book = {
//     title: 'Tet',
//     author: 'bqtung',
// }


// // Take in an obiject and convert to a json data
// const bookJson = JSON.stringify(book)
// console.log(bookJson)
// fs.writeFileSync('1-json.json', bookJson)

// // Take in a json and covert to an obijet
// const parsedData = JSON.parse(bookJson)
// console.log(parsedData.author)

// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer)
// console.log(dataBuffer.toString())

// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data.title)


const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)
console.log(data)

data.name = "KKK111"
data.age = 1000

console.log(data)

// Re-write the data to json file:
jsonDataChanged = JSON.stringify(data)

fs.writeFileSync('1-json.json',jsonDataChanged)