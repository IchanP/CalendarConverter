# Changes for L3

Just a notepad for L3 changes (for now)

* Moved all the throws into Verifier classes
* Made a specific JapaneseEraVerifier class.
* New file structure with Data and Verifiers seperated from the main work classes.

## Thoughts

* The verifyEraTimeFrame mixed low and high level abstraction to begin wtih. However I decided to break out the low level if statement to its own method instead. Although I felt that this was a bit silly as "variable < 1" is something that is extremely easy to understand eventho the abstraction level is lower.