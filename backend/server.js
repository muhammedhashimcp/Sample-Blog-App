import express from 'express';
import mongoose from 'mongoose';
// import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';
import cors from 'cors';
import * as dotenv from 'dotenv'; 
dotenv.config()
const app = express();
	console.log(
		'🚀 ~ file: server.js ~ line 16 ~ process.env.MONGO_URI_ATLAS',
		process.env.MONGO_URI_ATLAS
	);
 
app.use(cors());
app.use(express.json()); 
app.use('/api/user', router); 
// app.use('/api/blog', blogRouter);
mongoose
	.connect(process.env.MONGO_URI_ATLAS)
	.then(() => app.listen(5000))
	.then(() =>
		console.log('Connected TO Database and Listening TO Localhost 5000')
	)
	.catch((err) => console.log(err));