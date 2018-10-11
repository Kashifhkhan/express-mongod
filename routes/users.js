var express = require('express');
var router = express.Router();

var userAPI = require('../api/userAPI');
var userData = require('../data');

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
  function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  }
  // );

/* GET users listing. */
router.get('/', function(req, res){
  res.render('users/list', {users: userData});   
})

.get('/user', function(req,res) {
    res.status(404).render('users/user',{ message: 'User not found'});
})

.get('/user/:id', timeLog, function(req, res) { 
  const requestId = req.params.id;

  let user = userData.filter(user => {
    return user.userId == requestId;
  });
  // res.json(user[0]);

  if(!user.length) {
    // res.status(404).json({message: 'User not found'});
    res.status(404).render('users/user',{ message: 'User not found'});
  }

    // res.send('Hello user'+ requestId);
  res.render('users/user', {user: user[0]});
})

.post('/user', function(req, res){
    const newUser = {
      "userId": userData.length +  1,
      "userName": req.body.userName,
      "userRole": req.body.userRole,
      "userClass": req.body.userClass
    }

    userData.push(newUser);

    res.status(200).json({message:`${newUser.userId} Added successfully`});
})

.put('/user/:id', function(req, res) {
  const requestId =  req.params.id;

  let user =  userData.filter(user =>{
   return user.userId == requestId
  })[0];

  const index = userData.indexOf(user);

  const keys = Object.keys(req.body);

  keys.forEach(key => {
    user[key] = req.body[key];
  });

  userData[index] = user;

  res.status(200).json({message:`${user.userId} Updated successfully`});  
})

.delete('/user/:id', function(req, res){
    const requestId = req.params.id;

    let user =  userData.filter(user =>{
      return user.userId == requestId
     })[0];

    const index =  userData.indexOf(user);

    userData.splice(index, 1);

    res.status(200).json({message: `${user.userId} Deleted successfully`});
})




module.exports = router;
