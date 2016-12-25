const mongoose 	= require('mongoose');

// 1 - a connection string
// List the database's url
var connectionString = 'mongodb://localhost/example';

// 2 - need make connection
mongoose.connect(connectionString);

// 3 - listen for events and log changes
mongoose.connection.on('connected', function() {
  console.log('Mongoose has connected to: ' + connectionString);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose has disconnected from: ' + connectionString);
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose has experienced an error: ' + error);
});
