const app = require('./app');

const server = app.listen(3000, function(){
    console.log(`express is runing on part ${server.address().port}`)
});
