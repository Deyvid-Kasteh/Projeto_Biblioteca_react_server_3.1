import User from "./src/models/User.js";

async function changeCheckboxState() {
  try {
    // const { idUsuario, idLivro } = req.params;
    const idUsuario = "65064ba89185adc5e46738c2";
    const idLivro = "m3lvDwAAQBAJ";

    // const { idLivro } = req.body;
    const user = await User.findById(idUsuario);

    if (user) {
      const newArray = user.shoppingCart.filter(function (el) {
        return el.idLivro === idLivro;
      });

        const userCheckboxState = newArray[0].checkboxState;
        console.log(userCheckboxState);

    }
    else {
      console.log("User not found");
    //   return res.status(404).json();
    }
  } catch (error) {
    console.error(error);
    // return res.status(500).json({
    //   error: "Erro no servidor interno",
    // });
  }
}

// let newCasa = casa.shoppingCart.filter(function (el) {
//   return el.idLivro === "m3lvDwAAQBAJ";
// });
// console.log(newCasa);

changeCheckboxState()
