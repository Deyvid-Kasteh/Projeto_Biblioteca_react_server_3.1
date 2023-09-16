import express, { Router } from 'express';
import cors from 'cors';

import routes from './routes.js';
import './database/index.js';

class App {
    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.server.use(cors());
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }

}

export default new App().server;

