const MongoClient = require("mongodb").MongoClient;
const MongoCredentials = require("./config/mongo-credentials");

const uri = `mongodb://${MongoCredentials.username}:${MongoCredentials.password}@virtualdisplay1-shard-00-00-lovqf.mongodb.net:27017,virtualdisplay1-shard-00-01-lovqf.mongodb.net:27017,virtualdisplay1-shard-00-02-lovqf.mongodb.net:27017/${MongoCredentials.database}?ssl=true&replicaSet=VirtualDisplay1-shard-0&authSource=admin`;

let testData = null;

MongoClient.connect(uri, function(err, db) {


    initMongo(db);

});

function initMongo(db){
    db.listCollections({ name: "foo" }).toArray((err, items) => {
        if (items[0]){
            testData = items[0];
            console.log(testData);
            db.close();
        } else {
            createFoo(db);
        }
    });
}

function createFoo(db){
    db.createCollection("foo", function(err, result){
        initMongo(db);
    });
}