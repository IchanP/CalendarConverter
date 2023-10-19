# Public methods

This document is meant to detail the public methods available in this module.

## ``FirstJpErasFromGregorian``

### Description

Converts from Gregorian Calendar to all matching Japanese Era years.

### Params

``gregorianYearToEra``: type **``number``** - The Gregorian year you wish to convert, in integer format.

### Returns

``Array<string>`` - Returns an array of the matching Japanese Era years in ``Name YY`` format.

#### Note

You may consider this the replacement for the now deprecated [``LazyGregorianToFormattedJpEra``](#lazygregoriantoformattedjpera-deprecated)

### Example with two return values

``` js

const gregorianYear = 717
const jpEras = temporalConverter.FirstJpErasFromGregorian(gregorianYear)
console.log(jpEras) // [ 'Reiki 3', 'Yōrō 1' ]

```

### Example with one return value

``` js

const gregorianYear = 2000
const jpEras = temporalConverter.FirstJpErasFromGregorian(gregorianYear)
console.log(jpEras) // [ 'Heisei 12' ]

```

## ``KokiFromGregorian``

### Description

Converts from the Gregorian Calendar to Kōki, Japanese Imperial Year.

### Params

``gregorianYearToKoki``: type ``number`` - The Gregorian year you wish to convert, in integer format.

``timeEra``: type ``string`` - The era of the year, accepted args: "BCE/CE/BC/AD".

### Returns

``string`` - Returns the converted year in "Kōki YYYY", "Pre-Kōki YYYY" format.

### Note

You may consider this the replacement for the now deprecated [``GregorianToFormattedKoki``](#gregoriantoformattedkoki-deprecated)

### Example

``` js

const gregorianYear = 2000
const timeEra = 'CE'
const kokiYear = temporalConverter.KokiFromGregorian(gregorianYear, timeEra)
console.log(kokiYear) // Kōki 2660

```

## ``JpEraFromGregorian``

### Description

Converts from Gregorian Calendar to Japanese Era.

### Params

``gregorianYearToEra``: type ``number`` - The Gregorian year you wish to convert, in integer format.

``month``: type ``number`` - The month in integer format.

### Returns

``string`` - Returns the Japanese Era in "Name YY" format.

### Note

You may consider this the replacement for the now deprecated [``GregorianToFormattedJpEra``](#gregoriantoformattedjpera-deprecated)

### Example

``` js

const gregorianYear = 1389
const month = 2
const japaneseEra = temporalConverter.JpEraFromGregorian(gregorianYear, month)
console.log(japaneseEra) // Kōō 1

```

## ``KokiToFormattedGregorian``

### Description

Converts from the Japanese Imperial Year, Kōki, to the Gregorian Calendar.

### Params

``kokiYear``: type ``number`` - The Japanese Imperial Year in integer format.

### Returns

``string`` - Returns the converted year in "YYYY BCE/CE" format or an empty string.

### Example

``` js

const kokiYear = 2000
const gregorianYear = temporalConverter.KokiToFormattedGregorian(kokiYear)
console.log(gregorianYear) // 1341 CE

```

## ``JpEraToFormattedGregorian``

### Description

Converts from Japanese Era to Gregorian Calendar.

### Params

``eraName``: type ``string`` - The name of the Era.

``eraYear``: type ``number`` - The year in the Era.

### Returns

``string`` - Returns the converted year in "YYYY CE" format.

### Example

``` js

const eraName = 'Eikyō'
const eraYear = 2
const gregorianYear = temporalConverter.JpEraToFormattedGregorian(eraName, eraYear)
console.log(gregorianYear) // 1430 CE

```

## ``GregorianToFormattedKoki`` DEPRECATED

### Description

Converts from the Gregorian Calendar to Kōki, Japanese Imperial Year.

### Params

``gregorianYearToKoki``: type ``number`` - The Gregorian year you wish to convert, in integer format.

``timeEra``: type ``string`` - The era of the year, accepted args: "BCE/CE/BC/AD".

### Returns

``string`` - Returns the converted year in "Kōki YYYY", "Pre-Kōki YYYY" format.

### Example

``` js

const gregorianYear = 2000
const timeEra = 'CE'
const kokiYear = temporalConverter.GregorianToFormattedKoki(gregorianYear, timeEra)
console.log(kokiYear) // Kōki 2660

```

## ``GregorianToFormattedJpEra`` DEPRECATED

### Description

Converts from Gregorian Calendar to Japanese Era.

### Params

``gregorianYearToEra``: type ``number`` - The Gregorian year you wish to convert, in integer format.

``month``: type ``number`` - The month in integer format.

### Returns

``string`` - Returns the Japanese Era in "Name YY" format.

### Example

``` js

const gregorianYear = 1389
const month = 2
const japaneseEra = temporalConverter.JpEraFromGregorian(gregorianYear, month)
console.log(japaneseEra) // Kōō 1

```

## ``LazyGregorianToFormattedJpEra`` DEPRECATED

### Description

Converts from Gregorian Calendar to all matching Japanese Era years.

### Params

``gregorianYearToEra``: type **``number``** - The Gregorian year you wish to convert, in integer format.

### Returns

``Array<string>`` - Returns an array of the matching Japanese Era years in ``Name YY`` format.

### Example with two return values

``` js

const gregorianYear = 717
const jpEras = temporalConverter.FirstJpErasFromGregorian(gregorianYear)
console.log(jpEras) // [ 'Reiki 3', 'Yōrō 1' ]

```

### Example with one return value

``` js

const gregorianYear = 2000
const jpEras = temporalConverter.FirstJpErasFromGregorian(gregorianYear)
console.log(jpEras) // [ 'Heisei 12' ]

```
