const users = [
  { id: 1, name: "Jon Doe" },
  { id: 2, name: "Jane Doe" },
];

function getUserById(id, callback) {
  const user = users.find((user) => user.id === id);
  // console.log({ user }); //Se imprime asi porque seria llamar a user:user por eso mismo se puede abreviar.
  if (!user) {
    return callback("Usuario no encontrado!");
  }
  return callback(null, user);
}

//getUserById(1); //Llamamos a la funcion pasandole un ID

//Por consola se imprime el usuario con el id 1 porque hizo "match" con el id del objeto USERS. Todo esto gracias a la funcion FIND.

module.exports = {
  getUserById,
};
