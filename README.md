AngularJS-Filters
=================

Some extra filters for strings using AngularJS.

**startsWith**

Checks if a string starts with the given parameter. If not concatenates that parameter to the very start of the string and returns it else returns the string itself.

{{ str | startsWith:'/' }}

**endsWith**

Checks if a string ends with the given parameter. If not concatenates that parameter to the very end of the string and returns it else returns the string itself.

{{ str | endsWith:'/' }}