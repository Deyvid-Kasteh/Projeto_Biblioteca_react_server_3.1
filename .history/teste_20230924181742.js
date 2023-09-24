import User from "../models/User.js";



async fun changeCheckboxState(req, res) {
    try {
      const { idUsuario, idLivro } = req.params;
      // const { idLivro } = req.body;
      const user = await User.findById(idUsuario);

      if (user) {

         const newArray = user.shoppingCart.checkboxState?.filter(function (
           el
         ) {
           return el.idLivro === idLivro;
         });

        const userCheckboxState = newArray[0].checkboxState;

        if (!userCheckboxState) {
          await User.findOneAndUpdate(
            {
              _id: idUsuario,
              "shoppingCart.idLivro": idLivro,
            },
            {
              $set: {
                "shoppingCart.$.checkboxState": true,
              },
            }
          );
        } else if (userCheckboxState) {
          await User.findOneAndUpdate(
            {
              _id: idUsuario,
              "shoppingCart.idLivro": idLivro,
            },
            {
              $set: {
                "shoppingCart.$.checkboxState": false,
              },
            }
          );
        } else {
          return res.status(400).json();
        }
        const userUpdated = await User.findById(idUsuario);
        return res.status(200).json(userUpdated);
      } else {
        console.log("User not found");
        return res.status(404).json();
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: "Erro no servidor interno",
      });
    }
  }




let newCasa = casa.shoppingCart.filter(function (el) {
  return el.idLivro === "m3lvDwAAQBAJ";
});
console.log(newCasa);
