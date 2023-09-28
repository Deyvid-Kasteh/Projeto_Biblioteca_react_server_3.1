const filtro = {};
const atualizacao = { $set: { "shoppingCart.$[].checkboxState": true } };

await TestModel.updateMany(filtro, atualizacao, (err, resultado) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`${resultado.nModified} documentos atualizados.`);
    console.log("========================");
    console.log(`${resultado} documentos atualizados.`);
  }
});
