# Test Report 1 - Automated Tests for TemporalConverter Module

_Ran on 2023-09-25_

## How to run

To run these tests locally simply fork or download this repository, install the dependencies and run:

``` commandline
npm run test
```

## TimeFrame.js

>Test code can be found in ``timeframe.test.js``

![  timeframe-class-test
    √ should throw when passed incorrect type as name argument (61 ms)
    √ should throw when passed incorrect type as startyear and endyear arguments (37 ms)
    √ should throw when passed incorrect type as startmonth and endmonth as arguments (16 ms)
    √ should throw when passed an out of range value as startmonth and endmonth (16 ms)](reportimages/testreport-1/timeframe.png)

## GregorianToToki method

>Test code can be found in ``gregoriantotoki.test.js``

![  gregorianCE-to-koki
    √ should throw error if format is wrong (56 ms)
    √ should return "pre-koki" pre 661 bce/bc (3 ms)
    √ should return "Kōki" post 660 bce/bc (1 ms)
    √ handles year formatted as string (2 ms)
    √ should throw when given lower case era (6 ms)
    √ should return correct year in bc/bce (2 ms)
    √ should return correct year in ad/ce (1 ms)](reportimages/testreport-1/gregtokoki.png)

## KokiToGregorian method

>Test code can be found in ``kokitogregorian.test.js``

![  koki-to-gregorian
    √ should throw error on falsy argument (48 ms)
    √ should throw on wrong type argument (3 ms)
    √ should handle gregorian year 0 (1 ms)
    √ should handle negative input values (1 ms)
    √ should return BCE if passed < 660 (2 ms)
    √ should return CE if passed >= 660 (1 ms)](reportimages/testreport-1/kokitogreg.png)

## GregorianToJapaneseEra method

>Test code can be found in ``gregoriantojpera.test.js``

![  gregorian-to-jp-era
    √ should throw error if month is invalid format (69 ms)
    √ should throw error if month is out of range (11 ms)
    √ should return correct value (7 ms)
    √ should throw when no era is found (18 ms)
    √ lazy should return two eras if year matches start and end year (3 ms)
    √ lazy should return single era if year falls in interval (6 ms)
    √ lazy should throw if no era is found (6 ms)
    √ lazy should return edge years on no continuity (2 ms)](reportimages/testreport-1/gregtojpera.png)
