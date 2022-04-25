// const Todo = {
//     findBypk: (pk) => {
//         return new Promise((resolve, reject) => {
//             const resQuery = db.exec(`SELECT * FROM todos`)
//             if (!resQuery){
//                 reject(null)
//             }
//             reselove(resQuery)
//         })
//     }
// }

// const sendEmail = async (idTodo) => {
//     return true
// }

// const sendSms = async (idTodo) => {
//     await Telenor.send(053353535)
// }

// const getTodos = async () => {
//     Todo.findBypk(1).then((todo) => {
//         sendEmail(todo.email).then((poslatEmail) => {
//             if(todo.email){
//                 return "Todo nema email"
//             }
//             sendSms().then(poslatSMS => {
//                 return false
//             }).catch(err => {
//                 console.log("error iz promisa za sms")
//             })
//         }).catch(err => {
//             console.log("error iz promisa za email")
//         })
//     }).catch(err => {
//         console.log("error iz promisa za Todo")
//     })
// }

// const getTodos = async () => {
//     try {
//         const todoDB = await Todo.findBypk(1)
//         if(todoDB.email){
//             const emailSent = await sendEmail(todoDB.id)
//         }
//         it(todoDB.number){
//             const smsSent = await sendSms(todoDB.id)
//         }
//         return todoDB
//     } catch (error) {
//         console.log("error sa todom generalno", error)
//     }
// }

// const getTodosPosebnoSvaki = async () => {
//     let todoDB
//     try {
//         todoDB = await Todo.findBypk(1)
//     } catch (error) {
//         console.log("error kad gettujem todo iz baze")
//     }
//     const emailSent = await sendEmail(todoDB.id)
//     const smsSent = await sendSms(todoDB.id)
//     return todoDB
// }

// Sero voce - (prodavnica - data(voce) access)
const izPristineDoMitrovice = () => {
  return [{ id: 1, name: "Banana", kila: 20 }];
};

const izPrizrenaDoMitrovice = () => {
  return [{ id: 1, name: "Banana", kila: 400 }];
};

// Zajko Service ( Bussiness logika )
const izMitroviceDoLeposavica = (goceZahteva) => {
  if (goceZahteva.kila > 20) {
  }
  const rezultatIzPristine = izPristineDoMitrovice();
  const noveBanane = rezultatIzPristine.map((banana) => {
    return { ...banana, firma: "zajko" };
  });
  return noveBanane;
};

// Presentation layer - Eko controller
const izLeposavicaDoGoceta = (goceZahteva) => {
  const eko = izMitroviceDoLeposavica(goceZahteva);
  return eko;
};

const goceZahteva = {
  kila: 10,
};

const goceDobio = izLeposavicaDoGoceta(goceZahteva);

console.log(goceDobio);
