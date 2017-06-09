# xhr-rx-bare

Copied and generalized from here:
http://www.sitepoint.com/functional-reactive-programming-rxjs/

Bare bones Rx-based XHR.

## example

```js
var xhrRx = require('xhr-rx-bare')

xhrRx('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1')
  .subscribe(
    function (response) {
      document.querySelector('#app').innerHTML = JSON.parse(response)[0]
    },
    function (err) {
      console.log(err)
    })
```

## install

`npm install --save xhr-rx-bare`

## license

MIT
