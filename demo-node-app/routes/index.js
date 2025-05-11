const express = require('express');
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

const { check, ValidationResult, validationResult } = require('express-validator');
