import mongoose from "mongoose";

export const connection = async () => {
    const Url = `mongodb+srv://Shopyeasy:Re3SwIuDlRvSlFED@shopyeasy.ywcsrgj.mongodb.net/Shopeasy`
    try {
        await mongoose.connect(Url, { useUnifiedTopology: true });
        console.log("Connection is Successfull")

    } catch (error) {
        console.log("connection is failed", error.message)
    }
}

export default connection;