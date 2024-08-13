import mongoose from "mongoose";

//mongo compass
// export const connectDB = async () => {
//     const MONGODB_URI = "mongodb://localhost/merndb"

//     try {
//         const conn = await mongoose.connect(MONGODB_URI);
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.log(`Error: ${error.message}`);
//     }
// };

export const connectDB = async () => {
    const MONGODB_URI = "mongodb+srv://kenshidev:mongokenshidev@mern-tasklist.erv9t.mongodb.net/merndb?retryWrites=true&w=majority&appName=mern-taskList";

    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};