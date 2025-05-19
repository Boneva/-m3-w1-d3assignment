const path = require('path');
const auth = require('http-auth');

const basic = auth.basic({
    file: path.join(__dirname,'../users.htpasswd'),
});

const express = require('express');
const mongoose = require('mongoose');

const registration = mongoose.model('Registration');
  if (errors.isEmpty()) {
    const registration = new Registration(req.body);

    registration.save()
  .then(() => {
    res.send('Thank you for your registration!');
  })
  .catch((err) => {
    console.log(err);
    res.send('Sorry! Something went wrong.');
  });
  }
  else{}
router.get('/registrations', basic.check((req, res) => {
    Registration.find()
    .then((registrations) => {
     res.render('index', {title:'Listing reqistrations', registrarions
    });
    })
    .catch(() => { res.send('Sorry！Something went wrong.');});
}));


const router = express.Router();

router.get('/', function(req,res) {
    res.render('form', {title: 'Registration form'});
    res.send('It works!');
});

router.post('/', 
    [
    check('name')
        .isLength({ min: 1 })
        .withMessage('Please enter a name'),
    check('email')
        .isLength({ min: 1 })
        .withMessage('Please enter a email'),
    ],
    function(req,res) {
    console.log(req.body);
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        res.send('Thank you for your refistration!');
    }else{
        res.render('form', {title: 'Registration form',
            errors: errors.array(),
            data: req.body,
        });
    }
});
module.exports = router;

router.METHOD ( route,function(req,res){
    // callback function
});

const { check, ValidationResult, validationResult } = require('express-validator');const Registration = require('../models/Registration');

