const http = require("http");

// first method
http
  .createServer((req, resp) => {
    resp.write("hi");
    resp.end();
  })
  .listen(4500);

// Second Method
http.createServer(dataControll).listen(4500);

//simple function
function dataControll(req, resp) {
  resp.write("This is Data Controller Function");
  resp.end();
}

// Arrow function
const dataControll = (req, resp) =>
  resp.write("This is Data Controller Function");
resp.end();
