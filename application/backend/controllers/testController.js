const express = require('express');
const mongoSingleton = require('../config/connectMongoDbSingleton');

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint para probar la conexión a MongoDB
app.get('/test/connection', async (req, res) => {
    try {
        const connectionResult = await mongoSingleton.connect();
        res.json(connectionResult);
    } catch (error) {
        res.status(500).json({ error: 'Error al conectar a MongoDB' });
    }
});

// Endpoint para obtener la cadena de conexión a MongoDB
app.get('/get/connectionString', (req, res) => {
    const connectionString = mongoSingleton.getConnectionString();
    res.json(connectionString);
});

// Endpoint para desconectar de MongoDB
app.get('/disconnect', async (req, res) => {
    try {
        const disconnectionResult = await mongoSingleton.disconnect();
        res.json(disconnectionResult);
    } catch (error) {
        res.status(500).json({ error: 'Error al cerrar la conexión a MongoDB' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
