import jwt from "jsonwebtoken";
import authConfig from "../config/auth.js";
import User from "../models/User.js";
// import { checkPassword } from "../services/auth";
import bcrypt from "bcryptjs";



class SessionController {
    async create(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                error: "User invalid"
            });
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
            } else {
            }
        } catch (error) {
            console.log(error)
        }
        const { id } = user;
        return res.json({
            user: {
                name: user.name,
                id,
                email,
                books: user.books,
                details: user.details
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        });
    }
}

export default new SessionController();