const { getAge, getUUID } = require("./plugins");

const buildPerson = ({ name, birthdate }) => {
  return {
    name,
    birthdate,
    id: getUUID(),
    age: getAge(birthdate),
  };
};

const obj = {
  name: "Leonardo",
  birthdate: "1995-12-25",
};

const leonardo = buildPerson(obj);

console.log(leonardo);

// module.exports = {
//   buildPerson,
// };
