var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, express) {  
  if (process.env.NODE_ENV !== 'PRODUCTION') {
    app.use(morgan('dev'));
  }

  app.use(bodyParser.json());
  app.use(express.static(__dirname+'/../../client'));
  app.use(express.static(__dirname+'/../../dist'));
  app.use(require('./router')(express));
};
