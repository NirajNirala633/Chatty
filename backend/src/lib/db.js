import mongoose from "mongoose";
import colors from "colors";

// function mongodb database connection
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "Chatty",
        })
        console.log(`Connected to Database ${mongoose.connection.host}.`.bgRed);
    } catch (error) {
        console.log("DB Error", error);
        process.exit(1); // Exit process if DB connection fails
    }
}


