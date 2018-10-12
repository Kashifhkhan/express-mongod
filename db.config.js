var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
 
var dataBase;

  // Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
    
    console.log("Connected successfully to server");
    if(db){
  
      // this.dataBase =  db;
  
      // return db;
  
      return function(db) {
        dataBase = db;
      }
  
    // (function(){
    //   dataBase.obj = db;
    // })();
      
    }
  
  // });
    // setTimeout(function(){
    //   var data = dataBase;
    // },100);
  
    // console.log('data',data);
});

console.log('after', dataBase);

module.exports = dataBase;