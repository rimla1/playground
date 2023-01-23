const user1 = 1;
const user2 = 2;
const user3 = 3;

const DataLoader = require("dataloader");

const getUsers = (userIds) => {
  console.log(userIds);
  //   return Promise.resolve(data);
};

const userLoader = new DataLoader((keys) => getUsers(keys));

console.log("Ovo ce da se izvrsi 1");
userLoader.load(user1);
console.log("Ovo ce da se izvrsi 2");
userLoader.load(user3);
console.log("Ovo ce da se izvrsi 3, nakon ovoga ide [1,3,2]");
userLoader.load(user2);
