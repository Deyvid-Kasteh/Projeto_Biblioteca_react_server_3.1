let casa = {
  name: "Deyvid Kasteh",
  email: "kasteh.dev@gmail.com",
  shoppingCart: [
    {
      checkboxState: true,
      idLivro: "koArDwAAQBAJ",
      imgLivro:
        "http://books.google.com/books/publisher/content?id=koArDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70viJy2PTMFToevGtOMnNX0i0BwIdkj0uv3Q7F-zajO1_toEWjOrZLnBGfKodALsFyixgsvslDbCXH-7ZxUqx-d7EevL5HiiVlkgDpj0w1McXRjBr6B9tP8UrYjnDNj9Neq8ew2&source=gbs_api",
      ttlLivro: "O ódio que você semeia",
      price: { $numberDouble: "5.99" },
      quantity: { $numberInt: "1" },
    },
    {
      checkboxState: true,
      idLivro: "Bf86DwAAQBAJ",
      imgLivro:
        "http://books.google.com/books/publisher/content?id=Bf86DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71quybAmQh33Th0Loyr36ioPgzGsmuvEB-CbBueJ13dMche42phc6iy9SWOVssY-2XqYa5t5_NVoS07H867R3BDfJiwYCnsJa57Ll6nW1paB_kp93vko8u7r1bfAmrareWtKVHJ&source=gbs_api",
      ttlLivro: "Minha versão de você",
      price: { $numberDouble: "5.99" },
      quantity: { $numberInt: "1" },
    },
    {
      checkboxState: true,
      idLivro: "_5lEEAAAQBAJ",
      imgLivro:
        "http://books.google.com/books/publisher/content?id=_5lEEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71WuzxBOQOnnwv8o6mL2ZaIR25OcfQphVGhzgXSCrRgaWRHFnCYjuTQUGjip2-9LMxkURQDaAMNHlG8TdgjU8R-2Hu5QBTyRoArZPTUvOD3NHXUKtZyhzYYXChIpgug3Lr6q16U&source=gbs_api",
      ttlLivro: "Will",
      price: { $numberDouble: "5.99" },
      quantity: { $numberInt: "1" },
    },
    {
      checkboxState: true,
      idLivro: "m3lvDwAAQBAJ",
      imgLivro:
        "http://books.google.com/books/publisher/content?id=m3lvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72fVNQ8YP0X_su0W2c1ZBnR9i7EgoendaDyhKMgZBAou9sGuxD-_x2tZ6GjAOqQ-2J79c0vxWL84jA41NMTF-zcrxG75f9qh_wTS9nTjBwXwymhFVmdZAzOD-PTgc-hENZhm1QX&source=gbs_api",
      ttlLivro: "Fogo & Sangue – Volume 1",
      price: { $numberDouble: "5.99" },
      quantity: { $numberInt: "1" },
    },
  ],
};
let newCasa = casa.shoppingCart.filter(function (el) {
  return el.idLivro === "m3lvDwAAQBAJ";
});