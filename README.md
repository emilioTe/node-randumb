### node-randumb
generate a random alphanumeric ASCII character string



#### install

`npm install randumb`



#### quickstart

```javascript
var randumb = require('randumb');

console.log(randumb());
console.log(randumb(5));
console.log(randumb(10, false));
```



#### parameters

`randumb(charLen, startWithNumber)`

1. `charLen`: character length (default is `10`)
2. `startWithNumber`: can the `String` start with a number? (default is `true`)

