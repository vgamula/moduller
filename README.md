Modulerr
==

#### Description
**Modulerr** is a simple tool to have [Marionette.js-like modules](marionettejs.com/docs/v2.4.3/marionette.module.html) without Marionette.js

#### Installation
`bower install modulerr`

#### Usage
First of all you have to set up your Main application:
```js
var App = Modulerr();
```
Then you can generate your modules like by Marionette:
```js
App.module('Any.Nested.Module.You.Want', function (Want) {
    Want.init = function () {
        console.log('Hello, World!');
    };
});
```
Also you can access your modules like in Marionette:
```js
App.Any.Nested.Module.You.Want.init();
```

##### License
MIT
