const mongoSingleton = require('../config/connectMongoDbSingleton');

async function pruebaConexion() {
        try {
            const connectionResult = await mongoSingleton.connect();
            console.log(connectionResult); // { message: 'Conexión a MongoDB establecida correctamente' }
    
            const connectionString = mongoSingleton.getConnectionString();
            console.log(connectionString); // { connectionString: 'mongodb://localhost:27017/nombre_de_la_base_de_datos' }
    
            const disconnectionResult = await mongoSingleton.disconnect();
            console.log(disconnectionResult); // { message: 'Conexión a MongoDB cerrada correctamente' }
        } catch (error) {
            console.error('Error:', error);
        }
}

pruebaConexion();


