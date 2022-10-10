const zacini = ["Nutella", "Eurocream", "Plazmu", "Bananu", "orah", "badem"];

api.napraviPalacinku(zacini, () => {
  api.zaciniPalacinku(zacini, () => {
    api.rollajPalacinku(() => {
      api.zapakujPalacinku();
    });
  });
});
