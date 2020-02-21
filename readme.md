### node-randumb
generate a random alphanumeric ASCII character string



#### install

`npm install randumb`



#### quickstart

```javascript
var randumb = require('randumb');

console.log(randumb());
// LrdLhi8B70

console.log(randumb(5));
// 50f4q

console.log(randumb(10, false));
// R1jc8PKc3l
```



#### parameters

`randumb(charLen, startWithNumber)`

1. `charLen`: character length (default is `10`)
2. `startWithNumber`: can the `String` start with a number? (default is `true`)

