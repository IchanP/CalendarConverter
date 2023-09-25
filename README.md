# TemporalConveter

>TemporalConverter is a Javascript module for converting dates between different calendars. Need to quickly convert Kōki 2503 to Gregorian Calendar? TemporalConverter can help you achieve that.
> For the test report head over to the [wiki](https://github.com/IchanP/TemporalConverter/wiki).

## Installation

``
npm install temporalconverter.
``

## Import example

### Using ESM

``` JS
import temporalConverter from 'temporalconverter'

const returnvalue = temporalConverter.KokiToFormattedGregorian(500)
console.log(returnvalue)
```

### Using commonJS

``` JS
const temporalConverter = require('temporalconverter')

const returnvalue = temporalConverter.KokiToFormattedGregorian(500)
console.log(returnvalue)
```

> For the [era of Northern and Southern Courts](https://en.wikipedia.org/wiki/Nanboku-ch%C5%8D_period) they count the years and eras differently. For continuity the Northern Court eras are used while converting to Japanese Era.

### Testing

A test report is included in the tests folder of this repo. To run these tests locally simply fork or download this repository, install the dependencies and run

``` commandline
npm run test
```.
