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

The ideas and rules that are presented in Meaningful Names I largely agree with. However the presentation of these rules leave a lot to be desired, being quite verbose and simply smothering you in examples rather than provoking thought. I feel like a lot of these rules are to me quite obvious in hindsight but something I have not followed so well previously.

A quick look in my 1DV613 source code reveals several instances where I have named a function which is supposed to get something from an array different things, such as ”grabX” or ”getX”, thus violating the Pick One Word Per Concept rule. I do wonder if this rule in particular becomes harder to follow as you swap between contexts in a larger code base. Remembering what you wrote 2 weeks ago can be quite difficult if you’ve moved on to a different part of the project and feel ”finished” with the previous part.

Something that I believe was missed in the ”Use Searchable Names” rule is to avoid naming two variables the same, in the same file. I feel that it is quite easy to fall into this trap as a certain word may be a good descriptor for several different function paramaters in the same file. Should the developer fall into this trap the word instantly becomes less searchable.

Some of these rules very clearly support or perhaps even make the other rule redundant. If we see to the rule ”Use Pronouncable Names” and the rules ”Use Problem Solution/Domain Names”, the Pronouncable Names rule is made redundant by the other two rules. I believe there are very few instances if any where the pronouncable names rule would not be fulfilled by the other two.

Overall I believe that the entire chapter and these rules can be summed up in 3 simple statements: don’t encode, be distinct and be descriptive.

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

As with Chapter 2 ”Meaningful Names” I largely agree with everything that the chapter states. I do wholeheartedly believe that the ”Small!” rule has been taken to the extreme and that not allowing any nested structures makes writing code quite frustrating, as I attempted to follow these rules in my module – something I ended up dropping in the end.

I once again decided to look in my 1DV613 project, and I found that essentially all of my functions only take 1 or 2 arguments, components not withstanding, with the majority of the functions being fairly small. I do believe that if you follow the rules of keeping a function on the same abstraction level, ”One Level of Abstraction per Function” and ”Do One Thing” the number of arguments will be kept naturally low. Sending in a number of low level abstraction arguments into a function that is on a high level of abstraction does not make a lot of sense, and in fact breaks the ” One Level of Abstraction” rule. Just as in ”Meaningful Names” the rules here support the others.  

This is not to say that I completely agree with the idea of one level of abstraction, while it does have the potential to increase the understandability and readability of the code, if the naming is not up to par or is misleading it could instead achieve the complete opposite, while also creating  a scenario where a developer has to dive through very many leyers of abstraction to find actual code implementation.

### Reflection Overall

I previously talked a little about my code quality in the 1DV613 course. In this module I made a conscious attempt to write small functions and use descriptive names. The result of this is are the reflections mentioned above. Drawing attention to how similarly named the public functions are, it is a result of an attempt at applying “Pick One Word Per Concept” where the Formatted key word is intended to reveal the return type. This resulted in functions which varied in very small ways, something which is to be avoided. In an attempt to achieve information I instead achieved disinformation. The reason for this is I believe is a half-hearted attempt at following the rules, as none of the functions are in fact verbs.

My largest takeaway from the Functions chapter is the mixing of abstraction levels in functions. Achieving a consistent abstraction level is an easy way of increasing the understandability of code, to a reasonable level. Once again using one of the functions in this module as an example, ``gregorianWithMonthToJpEra``, I went back and looked at the if statements which are done using low level abstraction. I do not remember which if statement does what, which could easily have been avoided if they were their own verifier function instead.

The author describes his functions as first being big and disorganized, until they are later refined into following the rules he has laid out. This was the workflow I attempted in this module, something I have not previously bothered doing, and I ended up liking this workflow, and way of writing code.
