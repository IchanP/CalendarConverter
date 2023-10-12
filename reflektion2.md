# Changes for L3

Just a notepad for L3 changes (for now)

* Moved all the throws into Verifier classes
* Made a specific JapaneseEraVerifier & GregorianVerifier class.
* New file structure with Data and Verifiers seperated from the main work classes.

## Thoughts

* The verifyEraTimeFrame mixed low and high level abstraction to begin wtih. However I decided to break out the low level if statement to its own method instead. Although I felt that this was a bit silly as "variable < 1" is something that is extremely easy to understand eventho the abstraction level is lower.
* #findEraByName, I feel like it breaks against two rules, it has an if statement inside the for loop, which creates a nested structure, and it also returns either null or a TimeFrame, breaking the rule that it should always return the same type...?
* Not sure in what order to list findEra and formatFrom functions as they should be grouped but both groups are used by the "last" public function.
* Kept the previous code standard with JSDOC since I'm a "teamplayer"?
* In "findEraByMonthAndYear" I decided to throw an Error if it could not find a matching Era. I feel like this kind of goes against the "Do One Thing" rule, but I also do not see where else to put it, as putting it in the method that calls this method would also break this rule... Therefore I felt like it made the most sense to put it in this method. I also feel like the if statements inside of the for loop in this function are necessary and am unsure of how to move them out? Atleast it's only one abstraction level.
* Unsure whether having the if statement inside gregorianwithoutmonthtojpera adheres to not mixing abstraction levels? I feel like !foundEra.length is obvious enough in what it does for it to be okay, but it does violate it...
* Simply added 3 new public method, that wrap 3 of the other public methods, as an alternative to the ones that currently exist. I would have replaced the existing ones but as that may have broken a users app or whatever I decided not to.