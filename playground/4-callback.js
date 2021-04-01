

const add = (first_num, second_num, callback) => {
    setTimeout(() => {
        const sum = first_num + second_num
        callback(sum)
        console.log('Two seconds are up!')
    }, 2000)
}


add(1, 4, (sum) => {
    console.log(sum)
})

