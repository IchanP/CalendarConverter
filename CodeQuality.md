# Code Quality Requirements

## Chapter 2

| Identifier | Rule | Reflection |
| --- | --- | --- |
| temporalConverter | Object names should be nouns | A converter is a thing, and I felt it also made sense to name the exported object the same as the module.|
| GregorianToFormattedJpEra  | Avoid disinformation | This method name is very similar to the one below ``GregorianToFormattedKoki``. Dropping the "Formatted" would make it more readable and not nearly as hard to distinguish. |
| | Method names should be verbs | For all the public methods the name describes an action, rather than being a verb themselves. Renaming this method to ``convertGregorianToFormattedJpEra`` would fullfil this rule. However would make it a lot less readable and distinguishable if they all followed this format.|
| GregorianToFormattedKoki | Avoid disinformation | This method name is very similar to the one above ``GregorianToFormattedJpEra``. Dropping the "Formatted" would make it more readable and not nearly as hard to distinguish.  |
| | One Word Per Concept | This is relevant for all the public methods in the module, but the word ``Formated`` is meant to reveal that the return type will be a string formatted to the standard of the Calendar it's converting to. Whether it achieves this is up for debate... |
| KokiToFormattedGregorian | Intention revealing names | The method name does what it says, it converts a Koki date to the Gregorian Calendar. |
| | Use Pronouncable Names | It is for sure pronouncable, although a bit of a mouthful... |
| LazyGregorianToFormattedJpEra | Intention revealing names | This does not fully reveal what the method does, you can infer that it will format Gregorian to a Japanese Era date. However what does Lazy mean? Maybe ``LazyGregorianToMatchingJpEras``. However this introduces other issues and is not much clearer...  |

### Reflection of Ch.2


## Chapter 3

| Method | Length | Comment Lines | Rule | Reflection |
| --- | --- | --- | --- | --- |
| gregorianWithMonthToJpEra | 29 | 2 | Do One Thing | Performs validation as well. |
| | | | Small! | Could easily be broken up into 2 smaller functions, one for the validation and one for its main purpose. |
| | | | Blocks & Indenting | Has a nested structure of a for loop and several if statements |
| | | |  One Level of Abstraction | Mixes several low level if statements with a high abstraction return statement. |
| gregorianWithoutMonthToJpEra | 19 | 1 | Do One Thing | Does several things. I can easily see this being broken out into 2 or 3 different functions. |
| | | | Small! | Clearly a very bloated function. Breaking out several of the things it does into functions would drastically reduce it into maybe 3-4 lines |
| | | | One Level of Abstraction | Mixes high abstract function calls with low level abstraction if checks. Either break out the if checks into seperate ``is`` functions or as mentioned above, restructure the function into only making high abstraction calls. |
| verifyEraTimeFrame | 11 | | One Level of Abstraction | This funciton clearly mixes level of abstractions with having a high to intermediate abstraction level followed by a low level if statement. |
| | | | Do One Thing | The function both validates the timeframerange and fetches information about the era through one of the passed arguments. |
| findEraByName | 9 | | Blocks & Indenting | This function has a nested if statement inside its for loop. The if statement could have been broken out into its own function. |
| verifyEraName | 8 | | Small! | This function currently checks two seperate things. It checks that the era name exists and that the passed argument is of type String. Factoring out the typechecking to a seperate function would reduce the line length by 2, making it smaller. |
| | | | Do one thing | The function validates that the passed argument is a string and verifies that the passed argument exists in the era list. These should be seperated. |

### Reflection of Ch.3

As the two longest functions have comments explaining things inside of them I almost want to draw a correlation between function length and understandability of the code... This is obvious hello? xddd
