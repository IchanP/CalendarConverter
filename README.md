# TemporalConveter

>TemporalConverter is a Javascript module for converting dates between different calendars. Need to quickly convert Kōki 2503 to Gregorian Calendar? TemporalConverter can help you achieve that.

> For the test report head over to the [wiki](https://github.com/IchanP/TemporalConverter/wiki).

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
