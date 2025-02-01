const express = require ('express');
const cors = require ('cors');
const categoryRoute =require ('./routes/categoryRoute')
const productsRoute=require ('./routes/productsRoute')

const app = express() ;

app.use(express.json());
app.use(cors({
    origin: 'https://storify-app.netlify.app', // React app's origin
    credentials: true,
  }));


app.use('/products',productsRoute)
app.use('/categories',categoryRoute)

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
