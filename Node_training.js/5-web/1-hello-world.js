const http = require('http');

const requestListner=(req, res) => {
  res.end('<h1>Hello World\n</h1>');
};

const server=http.createServer(requestListner);

server.listen(4242, () => {
  console.log('Server is running...');
});
