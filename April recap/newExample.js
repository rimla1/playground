// Data access
const amanProdavnica = () => {
  return [
    { id: 1, name: "apple", color: "red", kg: "100" },
    { id: 2, name: "apple", color: "green", kg: "25" },
  ];
};

const ideaProdavnica = () => {
  return [
    { id: 1, name: "apple", color: "red", kg: "50" },
    { id: 2, name: "apple", color: "green", kg: "10" },
  ];
};

const rodaProdavnica = () => {
  return [
    { id: 1, name: "apple", color: "red", kg: "150" },
    { id: 2, name: "apple", color: "green", kg: "50" },
  ];
};

// Bussiness Logic - Zale Service
const logikaKodZaleta = (goceZahteva, minaZahteva) => {};

// Presentation Layer - Eko controller
const narudzbinaKodEka = (goceZahteva, minaZahteva) => {
  const robaStigla = logikaKodZaleta(goceZahteva, minaZahteva);
  return robaStigla;
};

// Users - korisnici usluga
const goceZahteva = {
  kg: 30,
  color: green,
};

const minaZahteva = {
  kg: 70,
  color: red,
};
