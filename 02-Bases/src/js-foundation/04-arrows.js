const users = [
  { id: 1, name: "Jon Doe" },
  { id: 2, name: "Jane Doe" },
];

const getUserById = (id, callback) => {
  const user = users.find((user) => user.id === id);
  // console.log({ user }); //Se imprime asi porque seria llamar a user:user por eso mismo se puede abreviar.
  user ? callback(null, user) : callback("Usuario no encontrado!");
};

//getUserById(1); //Llamamos a la funcion pasandole un ID

//Por consola se imprime el usuario con el id 1 porque hizo "match" con el id del objeto USERS. Todo esto gracias a la funcion FIND.

module.exports = {
  getUserById,
};
