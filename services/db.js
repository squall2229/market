const { MongoClient, ObjectID } = require('mongodb');

const connect = MongoClient.connect('mongodb://localhost:27017');

const db = {
    connect() {
        return connect.then(client => client.db('market').collection('tshirts'));
    },

    close() {
        return connect.then(client => client.close());
    },

    ObjectID
};

process.on('SIGINT', () => {
    db.close().then(() => process.exit(0));
});

module.exports = db;