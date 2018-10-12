var db_obj = require('../db.config');


var userAPI = {

    addUser : function(obj) { 

    var user = {
        name: 'kashif',
        email: 'kashif.khan@isobar.com',
        mobile: '9999999999',
        role: 'student'
      };  

      var collection = db_obj.collection('users');
    
      collection.insertOne(obj, function(err,success){
        console.log(err);
        console.log(success);
      })
},

getUsers : function () {
    var collection = db_obj.collection('users');
    collection.find().toArray(function(err, docs) {
    console.log(docs.length); 
    return docs;
  });
    
},

updateUser : function (id){
    
},

removeUser : function (id) { 
   
      var collection = db_obj.collection('users');
    
      collection.removeUser(id, function(err,success){
        console.log(err);
        console.log(success);
      })
}
}

module.exports =  userAPI;