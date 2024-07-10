import { connect, disconnect } from "mongoose";
async function Connection() {
    try {
        await connect(process.env.MONGO_URI);
        console.log('Connected to database');
    }
    catch (error) {
        console.log('Error connecting to database');
        console.log(error);
    }
}
async function CloseConnection() {
    try {
        await disconnect();
        console.log('Connection closed');
    }
    catch (error) {
        console.log('Error closing connection');
        console.log(error);
    }
}
export { Connection, CloseConnection };
//# sourceMappingURL=Connection.js.map