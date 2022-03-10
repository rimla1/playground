// using var
for (var i = 0; i < 3; i++) {
    const cLog = () => {
        console.log(i)
    }

    setTimeout(cLog, 200)
}

// using let
// for (let i = 0; i < 3; i++) {
//     const cLog = () => {
//         console.log(i)
//     }

//     setTimeout(cLog, 100)
// }