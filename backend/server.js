import express from 'express';
import data from './data';

const app = express();

app.get('/api/products/:id', (req,res) => {
    const productId = req.params.id;
    const product = data.products.find(x=> x.id == parseInt(productId));
    if(product){
        res.send(product);
    }else{
        res.status(404).send({msg:'Product Not Found.'})
    }
    
});

app.get('/api/products', (req,res) => {
    res.send(data.products);
});

app.listen(5000, () => {
    console.log('Server Started at http://localhost:5000')
});