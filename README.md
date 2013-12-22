# AngularJS-Filters #
---------------------

Some extra filters for strings and dates using AngularJS.

## startsWith ##

Checks if a string starts with the given parameter. If not concatenates that parameter to the very start of the string and returns it else returns the string itself.

    {{ str | startsWith:'/' }}

## endsWith ##

Checks if a string ends with the given parameter. If not concatenates that parameter to the very end of the string and returns it else returns the string itself.

    {{ str | endsWith:'/' }}

## length ##

Returns the length of the given string.

    {{ str | length }}

## wordsLength ##

Returns the number of words in a given string.

    {{ str | wordsLength }}

## limit ##

Returns a specific number of chars for a given string and concatenates an end string. First parameter is the length of the string with default value equal to 100 chars and second parameter is the end string to be concatenated with default value equal to '...'. 
    
    {{ str | limit }}   
    {{ str | limit:10:'!!!' }}

## words ##

Returns a specific number of words for a given string and concatenates an end string. First parameter is the number of words with default value equal to 100 words and second parameter is the end string to be concatenated with default value equal to '...'. 

    {{ str | words }}   
    {{ str | words:10:'!!!' }}

## random ##

Returns a random alpha, numeric or alphanumeric string. Its default output is an alphanumeric string of 16 digits. You can pass as first parameter the type of string by selecting 'alpha' or 'numeric' or 'alphanumeric' and as second parameter the number of digits for the result string. This filter doesn't matter where it is applied so you can apply it to a string with no meaning or even a variable etc 

    {{ str | random }}  
    {{ str | random:'numeric':5 }}  
    {{ str | random:'alphanumeric':32 }}  
    {{ str | random:'alpha':10 }}

## title ##

Returns a string by transforming every word of it to lowercase except for its first letter which is transformed to uppercase. 

    {{ str | title }}

## slug ##

Returns a string by transforming it to lowercase and by replacing space between words with available parameter. Parameter's default value is equal to '-'. 

    {{ str | slug }}   
    {{ str | slug:'_' }}

## snake ##

Returns a string by transforming it to snakecase. 

    {{ str | snake }}

## camel ##

Returns a string by transforming it to camelcase. 

    {{ str | camel }}
## studly ##

Returns a string by transforming it to studlycase. So every vowel is transformed to lowercase and every consonant to uppercase.

    {{ str | studly }}

## dateStamp ##

Useful if you try to apply Angular's date filter on datetime values like yyyy-MM-dd hh:mm:ss returned from a database. It takes datetime format and turns it to timestamp.

    {{ date | dateStamp }}  
    {{ date | dateStamp | date:"dd/MM/yyyy" }}

## dateAfter ##

Useful if you want to add a time interval to a timestamp. It takes one parameter which is a string with the number and the type of interval like '1s' for 1 second, '10m' for 10 minutes, '30h' for 30 hours and '200d' for 200 days. As you understood you select s => seconds, m => minutes, h => hours and d => days. If you want to apply it to a datetime format apply previous filter too.

    {{ date | dateAfter:'10d' }} 
