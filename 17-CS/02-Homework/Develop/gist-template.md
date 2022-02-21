# Title (Regex Tutorial)

This Regular expressions, or regex for short, are a series of special characters that define a search pattern.Whichs includes code or search algorithms, regular expressions can be used to find certain patterns of characters within a string, 

## Summary

In Today’s summary  I will be going over the components of a regular expression used in Hex Values. 

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## Regex Components

### Anchors
The $ anchor signifies a string that ends with the characters that precede it. Just as with the ^ character, it can be preceded by an exact string or a range of possible matches.
### Quantifiers
Quantifiers specify how many instances of a character, group, or character class must be present in the input for a match to be found.
### Grouping Constructs
Grouping constructs delineate the subexpressions of a regular expression and capture the substrings of an input string.

### Bracket Expressions
Anything inside a set of square brackets ([]) represents a range of characters that we want to match. These patterns are known as bracket expressions, but they are also known as a positive character group, because they outline the characters we want to include. 
### Character Classes
A character class in a regex defines a set of characters, any one of which can occur in an input string to fulfill a match.
### The OR Operator
Remember that a bracket expression does not require the string to meet all of the requirements in the pattern. This means that [a-z0-9_-] searches for alphanumeric characters or the two special characters included in the pattern. Often, you'll want to add this same logic outside of a bracket expression, especially within a grouping construct or between two different grouping constructs.
### Flags

### Character Escapes
The backslash (\) in a regex escapes a character that otherwise would be interpreted literally. For example, the open curly brace ({) is used to begin a quantifier, but adding a backslash before the open curly brace (\{) means that the regex should look for the open curly brace character instead of beginning to define a quantifier. This is common when looking for strings with special characters that are the same as a particular component of a regex.
## Author

Dondre Mclenan

I'm graduate of valencia college with a Associates in arts. and UCF coding bootcamp
