# Utility JavaScript

A set of JavaScript utility functions and a hand-rolled basic test framework for testing them.

Some act as wrappers to existing JS methods, but provide extra belt-and-braces validation for the data which is passed in.

For example, if I wanted to check if an array has items, I could just use `myArray.length > 0`. By using the wrapper function `arrayHasItems(myArray)`, we can also make sure that `myArray` is truthy and is, in fact, an array.