const docChanged1 = TestModel.findOneAndUpdate(
  {
    _id: "6514d9b8cc259f71c9e15da3",
    "shoppingCart.idLivro": "jotaSSSS",
  },
  {
    $set: {
      "shoppingCart.$.checkboxState": true,
    },
  }
);

console.log("Saving");

console.log("Saved");
