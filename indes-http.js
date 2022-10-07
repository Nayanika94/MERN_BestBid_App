const http = require('http');

const server = http.createServer((req, res) => {
  //   res.write('<h1>Hello World</h1>');
  //   res.end();

  if (req.url === '/') {
    res.write('<h1>Hello World</h1>');
    res.end();
  } else if (req.url === '/about') {
    res.write('about');
    res.end();
  } else if (req.url === '/users') {
    const users = [
      { name: 'bob', age: 34 },
      { name: 'bob2', age: 24 },
      { name: 'bob3', age: 44 },
    ];
    //res.writeHead('about');
    res.end(JSON.stringify(users));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(5000, () => {
  console.log('server is running');
});
