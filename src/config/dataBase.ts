import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const MongoString: string = "mongodb://127.0.0.1:27017/backDB"
export const dataBase = () => {
    mongoose.connect(MongoString).then(() => {
        console.log("Database created successfully🚀🚀🚀🚀")
    })
}