import 'dotenv/config';
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./user.js";

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado ao MongoDB");

        const adminExists = await User.findOne({ role: "administrador" });
        if (adminExists) {
            console.log("Já existe um administrador no sistema.");
            return;
        }

        const nome = process.env.ADMIN_NOME || "Administrador";
        const email = process.env.ADMIN_EMAIL;
        const senha = process.env.ADMIN_SENHA;

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const admin = await User.create({
            nome,
            email,
            senha: senhaCriptografada,
            role: "administrador"
        });

        console.log("Administrador criado com sucesso:", admin);
    } catch (error) {
        console.error("Erro ao criar administrador:", error);
    } finally {
        mongoose.connection.close();
    }
};

createAdmin();
