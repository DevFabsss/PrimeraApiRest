//se importan paquetes e inician modulos
const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');

//se llama al body parser
app.use(bodyParser.json());

//se importan las rutas
const postRoute = require('./routes/post');
app.use('/servicios', postRoute);

app.get('/', (req,res)=>{
    res.send('prueba 1 respuesta del sv');//ruta por defecto
});

//conexion a la BD
async function connectToDatabase(){
    try{
        await mongoose.connect('mongodb+srv://fabiancelydev:5Kf0gmAP3Mx3xNmb@cluster0.zfqgxov.mongodb.net/',
        {useNewUrlParser: true,
        useUnifiedTopology: true
        });
        console.log('Conexión establecida a la BD');
        //se define el puerto, como va a escuchar el servidor las peticiones
        app.listen(1080);
    }catch (error){
        console.error('Error para cconectar con mongodb', error);
    }
}
connectToDatabase();