// Method - 1

// function getNumber() {
//     const randomNum = Math.random() * 1000;
//     return new Promise((resolve, reject) => {
//         if (randomNum % 5 === 0) reject(randomNum);
//         else resolve(randomNum);
//         return randomNum;
//     })
// }

// getNumber()
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


//Method - 2
const resolveFunc = (value) => {
    return new Promise((resolve) => {
        resolve(value)
        return value
    })
}

const rejectFunc = (value) => {
    return new Promise((resolve, reject) => {
        reject(value)
        return value
    })
}


Promise.resolve(value).then(x => )
function getNumber() {
    const randomNum = Math.random() * 1000;
    if (randomNum % 5 === 0) rejectFunc(randomNum)
    .catch(err => console.log(err))
    else resolveFunc(randomNum)
    .then(x => console.log(x))
    .catch(err => console.log(err))
}

getNumber()


