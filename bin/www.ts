import app from "../app";
import Debug from "debug";

var http = require('http').createServer(app);
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
http.listen(port);
http.on('error', onError);
http.on('listening', onListening);
function normalizePort(val: string) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {return val;}
  if (port >= 0) {return port;}
  return false;
}
function onError(error: { syscall: string; code: any; }) {
  if (error.syscall !== 'listen') {throw error;}
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
function onListening() {
  const addr = http.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  const debug = Debug("MyApp");  
  debug('Listening on ' + bind);
}