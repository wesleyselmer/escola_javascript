const mongoose = require("mongoose")

async function main(){

    try{
        mongoose.set("strictQuery", true);
       
        await mongoose.connect(
            "mongodb+srv://wesleyselmer:6YFxISg4IE03ptnJ@cluster0.hacuije.mongodb.net/"
        );

        console.log("Conectado ao banco!");

    } catch (error) {
        console.log(`Erro: ${error}`);
    }

}

module.exports = main