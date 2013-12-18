var myApp = angular.module('myApp', []);

myApp
	.filter('startsWith', function(){
		return function(input, attr){
			var input = input.trim();
			return (input.slice(0, 1) == attr) ? input : attr + input;
		}
	})			
	.filter('endsWith', function(){
		return function(input, attr){
			var input = input.trim();
			return (input.slice(-1) == attr) ? input : input + attr;
		}
	})
	.filter('length', function(){
		return function(input){
			return input.trim().length;
		}
	})
	.filter('wordsLength', function(){
		return function(input){
			var words = input.trim().split(" ");
			return words.length;
		}
	})
	.filter('limit', function(){
		return function(input, attr1, attr2){
			var attr1 = (attr1 == undefined) ? 100 : attr1,
				attr2 = (attr2 == undefined) ? '...' : attr2;
			return input.trim().slice(0, attr1) + attr2;
		}
	})
	.filter('words', function(){
		return function(input, attr1, attr2){
			var words = input.trim().split(" "),
				attr1 = (attr1 == undefined) ? 100 : attr1,
				attr2 = (attr2 == undefined) ? '...' : attr2,						
				limit = (words.length < attr1) ? words.length : attr1,
				output = "", blank;
			for(i=0; i<limit; i++){
				blank = (i == 0) ? "" : " ";
				output = output.concat(blank, words[i]);
			}
			return output + attr2;
		}
	})
	.filter('title', function(){
		return function(input){
			var words = input.trim().split(" "),
				output = "", newWord = "", blank, char;
			for(i=0,lenWs=words.length; i<lenWs; i++){
				word = words[i].toLowerCase();
				for(k=0,lenW=word.length; k<lenW; k++){
					char = (k == 0) ? word.charAt(k).toUpperCase() : word.charAt(k);
					newWord = newWord.concat(char);
				}
				blank = (i == 0) ? "" : " ";
				output = output.concat(blank, newWord);
				newWord = "";
			}
			return output;
		}
	})		
	.filter('slug', function(){
		return function(input, attr){
			var words = input.trim().split(" "),						
				attr = (attr == undefined) ? '-' : attr,
				output = "", separator;
			for(i=0,lenWs=words.length; i<lenWs; i++){
				word = words[i].toLowerCase();
				separator = (i == 0) ? "" : attr;
				output = output.concat(separator, word);
			}
			return output;
		}
	})
	.filter('snake', function(){
		return function(input){
			var words = input.trim().split(" "),
				output = "", separator;
			for(i=0,lenWs=words.length; i<lenWs; i++){
				word = words[i].toLowerCase();
				separator = (i == 0) ? "" : "_";
				output = output.concat(separator, word);
			}
			return output;
		}
	})
	.filter('camel', function(){
		return function(input){
			var words = input.trim().split(" "),
				output = "", newWord = "", char;
			for(i=0,lenWs=words.length; i<lenWs; i++){
				word = words[i].toLowerCase();
				if(i > 0){
					for(k=0,lenW=word.length; k<lenW; k++){
						char = (k == 0) ? word.charAt(k).toUpperCase() : word.charAt(k);
						newWord = newWord.concat(char);
					}
				} else {
					newWord = word;
				}

				output = output.concat(newWord);
				newWord = "";
			}
			return output;
		}
	})
	.filter('studly', function(){
		return function(input){
			var words = input.trim().split(" "),
				output = "", newWord = "", regex = /^[aeiou]$/i, char;
			for(i=0,lenWs=words.length; i<lenWs; i++){
				word = words[i].toLowerCase();
				for(k=0,lenW=word.length; k<lenW; k++){
					char = regex.test(word.charAt(k)) ? word.charAt(k) : word.charAt(k).toUpperCase();
					newWord = newWord.concat(char);
				}
				output = output.concat(newWord);
				newWord = "";
			}
			return output;
		}
	});