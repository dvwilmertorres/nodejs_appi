const { MongoClient } = require('mongodb');
const config = require('./config');

class MongoDBSingleton {
    constructor() {
        if (!MongoDBSingleton.instance) {
            this.url = config.mongodb.url;
            this.dbName = config.mongodb.dbName;
            this.client = new MongoClient(this.url, { useUnifiedTopology: true });
            MongoDBSingleton.instance = this;
        }
        return MongoDBSingleton.instance;
    }

    async connect() {
        try {
            // Conectar al servidor MongoDB
            await this.client.connect();
            return { message: 'Conexión a MongoDB establecida correctamente' };
        } catch (error) {
            console.error('Mensaje Error al conectar a MongoDB:', error);
            return { error: 'Error al conectar a MongoDB' };
        }
    }

    async disconnect() {
        try {
            await this.client.close();
            return { message: 'Conexión a MongoDB cerrada correctamente' };
        } catch (error) {
            console.error('Mensaje Error al cerrar la conexión a MongoDB:', error);
            return { error: 'Error al cerrar la conexión a MongoDB' };
        }
    }

    getConnectionString() {
        return { connectionString: `${this.url}/${this.dbName}` };
    }
}

// Exportar una instancia única del singleton
module.exports = new MongoDBSingleton();
