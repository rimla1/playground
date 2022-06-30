"use strict";
// 1. Basic Classes
// 2. Subclasses
// 3. abstract classes
// 4. interfaces
// 1. Basic Classes [create when our class does not pass IS-A test for class]
class OnePieceChars {
}
// 2. Subclasses [More specific version of a class that already exist, they are passin IS-A test]
class Admirals extends OnePieceChars {
}
class Warlords extends OnePieceChars {
}
class StrawHats extends OnePieceChars {
}
class Luffy extends StrawHats {
}
class Usopp extends StrawHats {
}
const luffy = new Luffy();
luffy.name = "Luffy";
luffy.age = 19;
luffy.joinedByOrder = 1;
luffy.position = "Fake capitain";
luffy.weapon = "hands";
const usopp = new Usopp();
usopp.name = "Usopp";
usopp.age = 22;
usopp.joinedByOrder = 2;
usopp.position = "Real capitain";
usopp.weapon = "Sniper";
const printInfoAboutOnePieceCharacter = (OPCharacter) => {
    console.log(`Hello, I'm ${OPCharacter.name} ${OPCharacter.age}, I joined ${OPCharacter.joinedByOrder} and my position is ${OPCharacter.position}, my weapon is my: ${OPCharacter.weapon}`);
};
printInfoAboutOnePieceCharacter(luffy);
printInfoAboutOnePieceCharacter(usopp);
