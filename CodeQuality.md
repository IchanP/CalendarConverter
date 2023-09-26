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

| Method | Length | // | Rule | Reflection |
| --- | --- | --- | --- | --- |
| gregorianWithMonthToJpEra | 29 | 2 |  | |
| gregorianWithoutMonthToJpEra | 19 | 1 |  | |
| eraTimeFrameVerifier | 11 | | | |
| findEraByName | 9 || | |
| eraNameVerifier | 8 | | | |

### Reflection of Ch.3

As the two longest functions have comments explaining things inside of them I almost want to draw a correlation between function length and understandability of the code...
