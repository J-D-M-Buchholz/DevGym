import mongoose from "mongoose";

const URL = process.env.URL


const connectMongoDB = async () => {
    try {
        await mongoose.connect(URL as string)
        console.log('connect success')
    } catch (error) {
        console.log(error)
    }
    
}

export default connectMongoDB