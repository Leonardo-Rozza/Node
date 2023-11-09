const getAgePlugin = require("get-age");

const getAge = (birthdate) => {
  if (!birthdate) throw new Error("El birthdate no está definido");
  return getAgePlugin(birthdate);
};

module.exports = {
  getAge,
};
