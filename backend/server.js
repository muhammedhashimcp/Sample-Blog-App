import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';
// import blogRouter from './routes/blog-routes.js';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/user', router);
app.use('/api/blog', blogRouter);
app.post('/', (req, res) => {
	res.send('added  to');
});
mongoose
	.connect(process.env.MONGO_URI_ATLAS)
	.then(() => console.log('Connected To Database  '))
	.catch((err) => console.log(err));
app.listen(5000, console.log('Listening To Localhost 5000'));
// "start": "nodemon --experimental-modules --es-module-specifier-resolution=node server.js",
