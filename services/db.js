const { MongoClient, ObjectID } = require('mongodb');

const connect = MongoClient.connect('mongodb://squall2229:Finalfantasy8@ds253587.mlab.com:53587/market');

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