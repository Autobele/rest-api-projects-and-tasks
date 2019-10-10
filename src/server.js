import app from './app';
import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.PORT, err => {
    if(err) throw err;
    console.log(`Server running succesfully in port ${process.env.PORT}`);
})