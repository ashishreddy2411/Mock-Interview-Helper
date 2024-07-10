import app from './app';
import { Connection } from './db/Connection';

const PORT = process.env.PORT;
Connection().then(()=>{
    app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));
}).catch((error)=>{
    console.log('Error connecting to database');
    console.log(error);
});