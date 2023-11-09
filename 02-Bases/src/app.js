//const { emailTemplate } = require("./js-foundation/01-template");

const { getUserById } = require("./js-foundation/04-arrows");

//require("./js-foundation/02-desestructuracion");
//require("./js-foundation/03-callbakcs");

// console.log(emailTemplate);

const id = 1;

getUserById(id, (err, user) => {
  if (err) {
    throw new Error(err);
  }
  console.log({ user });
});
