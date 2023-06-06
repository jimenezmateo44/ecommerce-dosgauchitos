import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { connect } from 'mongoose';

const port = process.env.PORT || 5000;

connectDB(); //CONEXION A MONGODB
const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/productos', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));