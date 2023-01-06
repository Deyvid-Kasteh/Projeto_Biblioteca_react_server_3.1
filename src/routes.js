import { Router } from 'express';
import auth from './middlewares/auth.js';
import SessionsController from './controllers/SessionsController.js';
import HelloController from './controllers/HelloController.js';
import UsersController from './controllers/UsersController.js';
import RepositoriesController from './controllers/RepositoriesController.js';

const routes = new Router();


// --- Rota pública
routes.get("/hello", HelloController.index);
routes.post("/sessions", SessionsController.create);
routes.post("/users", UsersController.create);
routes.get("/Perfil/:id", UsersController.showUser);



// --- middleware
routes.use(auth)

// --- Rosta protegida

routes.patch("/Perfil/:id", UsersController.updateOne);
routes.patch("/Perfil/:id/pic", UsersController.updatePic);
routes.patch(
  "/Perfil/:idUsuario/addBookToFavorites/:idLivro",
  UsersController.addBookToFavorites
);

routes.patch(
  "/Perfil/:idUsuario/addBookToSeeLater/:idLivro",
  UsersController.addBookToSeeLater
);

routes.delete(
  "/Perfil/:idUsuario/destroyBookfromFavorites/:idLivro",
  UsersController.destroyBookfromFavorites
);

routes.delete(
  "/Perfil/:idUsuario/destroySeeLaterBook/:idLivro",
  UsersController.destroySeeLaterBook
);


// destroySeeLaterBook;



routes.get("/users", UsersController.index);
routes.get("/users/:id", UsersController.show);
routes.put("/users/:id", UsersController.update);
routes.delete("/users/:id", UsersController.destroy);
routes.get("/users/:user_id/repositories", RepositoriesController.index);
routes.post("/users/:user_id/repositories", RepositoriesController.create);
routes.delete("/users/:user_id/repositories", RepositoriesController.destroy);

export default routes;