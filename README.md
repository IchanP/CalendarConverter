# TemporalConveter

>TemporalConverter is a Javascript module for converting dates between different calendars. Need to quickly convert Kōki 2503 to Gregorian Calendar? TemporalConverter can help you achieve that.

## Installation

``` JS
npm install temporalconverter
```

## Import example

### Using ESM

``` JS
import temporalConverter from 'temporalconverter'

const kokiYear = 500
const returnvalue = temporalConverter.KokiToFormattedGregorian(kokiYear)
console.log(returnvalue)
```

### Using commonJS

``` JS
const temporalConverter = require('temporalconverter')

const returnvalue = temporalConverter.KokiToFormattedGregorian(500)
console.log(returnvalue)
```

### Testing

A test report is included in the tests folder of this repository. To run these tests locally simply fork or download this repository, install the dependencies and run:

``` commandline
npm run test
```

### Japanese Era during Nanboku-chō period

 Currently all Japanese Era conversions between 1329 and 1390, the Nanboku-chō period, are done using the Northern Courts eras. Future release may allow an option to use Southern Court eras instead.
[For more information](https://en.wikipedia.org/wiki/Nanboku-ch%C5%8D_period)

### License

Part of a laboration in the course 1DV610 at Linnèuniversitet. Published under MIT License.
