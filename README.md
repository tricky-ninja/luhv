# Luhv

### A simple npm package with flames relation game, love calculation, ask 8ball and truth or dare.

Simple to use this module.

## Installation

`npm install luhv`

## Documentation

Included four funtions in this module:

[1. Love count](#1.LoveCount)

[2. Flames game](#2.FlamesGame)

[3. Ask 8ball](#3.Ask8ball)

[4. Truth or Dare](#4.TruthOrDare)

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

luhv.loveCount('Vasim', 'Amala', (love) => {
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

luhv.flames('Vasim', 'Amala', (flames) => {
    console.log(`Flames result: ${flames}`);
}, (err) => {
    console.log(err);
});
```

### 3.Ask8ball

`eightBall(answer)`

> Type
`answer = 'string'`

you will get a random answer in this argument.

#### Example for eightBall()

```js
const luhv = require('luhv');

luhv.eightBall(result => {
    console.log(result);
});
```
### 4.TruthOrDare

Truth or Dare are in two seperate function.

#### For Truth

`truth(truth)`

> Type
`truth = 'string'`

#### Example for truth()

```js
const luhv = require('luhv');

luhv.truth(question => {
    console.log(question);
});
```

#### For Dare

`dare(dare)`

> Type
`dare = 'string'`

#### Example for dare()

```js
const luhv = require('luhv');

luhv.dare(dare => {
    console.log(dare);
});
```
