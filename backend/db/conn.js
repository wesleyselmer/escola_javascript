const mongoose = require("mongoose")

async function main(){

    try{
        mongoose.set("strictQuery", true);

        const user = process.env.DB_USER;
        const pass = process.env.DB_PASS;
        const host = process.env.DB_HOST;
        const connString = `mongodb+srv://${user}:${pass}@${host}`;
        
        await mongoose.connect(connString);

        console.log("Conectado ao banco!");

    } catch (error) {
        console.log(`Erro: ${error}`);
    }

}

module.exports = main