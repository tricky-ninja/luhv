# Luhv

### A simple npm package for flames relation game and to find love count.

Simple to use this module.

## Installation

`npm install luhv`

## Documentation

Included two funtions in this module:

[1. Love count](#1.LoveCount)

[2. Flames game](#2.FlamesGame)

### 1.LoveCount

`loveCount(yourName, partnerName, result, error)`

> Types

`yourName = 'string'`

`partnerName = 'string'`

`result = number`

`error = 'string'`

#### Example for loveCount()

```js
const luhv = require('luhv');

luhv.loveCount('Arshal', 'Anushka', (love) => {
    console.log(`Love Percentage: ${love}%`);
}, (err) => {
    console.log(err);
});
```

### 2.FlamesGame

`flames(yourName, partnerName, result, error)`

> Types

`yourName = 'string'`

`partnerName = 'string'`

`result = 'string'`

`error = 'string'`

result's outputs: `friends, lovers, affections, marriage, enemy, sister`

#### Example for flames()

```js
const luhv = require('luhv');

luhv.flames('Arshal', 'Anushka', (flames) => {
    console.log(`Flames result: ${flames}`);
}, (err) => {
    console.log(err);
});
```