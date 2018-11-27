# Workshop
## White Label Tool.

## Introduction :

Create a web application used for the customization of a white label. This is an introduction to coding that aims at teaching the inner workings of simple web application. Several aspects will be touched. The exercise will be followed by a bonus and a real application that will used and bring added value to QOVER.

## Preparation :

## Installation :

So as to not waste time and have a ready work setup, I propose you download this various tools:

- Visual studio code : https://code.visualstudio.com/

- Node.js : https://nodejs.org/en/

Download this code and open it with Visual Studio Code :

https://github.com/hamzaPixl/workshop-whitelabel

## Definitions :

Here are a fews definitions of words from the IT lingo. In order to ease your understanding during the presentation and the workshop, it would be good to read these at least once.

- **Function**: A function is a piece of code with a specific purpose that can be reused accross a program. Function often have parameters (input) and return a value (output), e.g.: `reverseWord(word){ return word.split('').reverse().join(''); }` is a function named `reverseWord` that has one parameter called `word` that returns that word, but reversed. The code between the curly brackets is the piece of code run by the function when that function is used.

- **Variable**: A variable is used to store values, such a those returned by a function. In `var aReversedWord = rerverseWord('Qover')`, `aReversedWord` is a variable that holds the value returned by the `reverseWord` function when called with the word "Qover" (`aReversedWord` thus equals "revoQ").

- **JSON**: Short for "JavaScript Object Notation", JSON is a standard way to format data in order to tranfer it from one program to an other. For example, if a website wants to send my user name and and number of lines of code to a server, it could send that information as text looking like this: `{ "userName": "hamzaPixl", "lines": 60179 }`.

- **Loop**: A loop is a way to repeat a line of code as many time as needed. There's many way to perform loops. One of the most basic way is written as such:
```
for(var i = 0; i < 10; i++) {
  console.log('hello world');
}
```
`i` is the variable used as a counter starting at 0, `i < 10` is the condition for the loop to continue (which is that the counter be lower than 10), and `i++` is the operation executed after each loop (here it increment the counter by one, so that it is counting the loops). The code between curly bracket is the code executed by each loop, here it prints "hello world" to the console. Can you guess how many times this piece of code will print "hello world"?

- **Condition**: A condition is a piece of code that can be true or false. The values "true" and "false" are called "boolean values". `10 > 9`, "ten is greater than nine", will evaluate to false. Conditions often use [logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators).

- **Web application**: A web application is an application (a program) that is used through a browser (firefix, chrome, safari,...).

- **HTML**: "Hyper Text Markup Language" is a standard way to organise information to be displayed on a web site or web application. It uses markups to define the different parts of the information. The following example defines a paragraph using standard markup. `<p>` marks the start of the paragraph part and `</p>` marks the end. HTML only brings structure but can be styled (change colors, shapes, fonts,...) using a language called CSS.
```
<p>
"Hyper Text Markup Language" is a standard way to organise information to be displayed on a web site or web application.
</p>
```

- **Javascript**: JavaScript, often shortened "JS" is a programming language used to create web application in combination with HTML and CSS. While HTML organises the information and CSS styles it, JS controls the "behavior" of the application such as user interaction, communication with other programs, and other needs of a web site or application such as file creation, storage of data on the user's computer and many other things.

## Exercise :
		
### Step 1:

	-	Open the terminal and move to the poject folder.
	-	Install project dependency.
	-	Simply start the project.

### Step 2:

	-	Create a simple HTML form, first and last name.
	-	Change the style however you feel.
	-	Retrieve the form data.

### Step 3:

	- 	Show the values below the form at submission time.
	- 	Create a form for a white label : 

		bigTitle
  		cardBackground
    		error
    		footerBackground
    		footerText
    		headerBackground
    		primary
    		primaryBackground
    		primaryButtonText
    		secondary
    		secondaryButtonText
    		smallFooterText
    		textQuote


### Step 4:

	-	Show the JSON object properly using a new library. E.g. : https://github.com/mac-s-g/react-json-view
	-	Export the object to a file. E.g. : https://github.com/eligrey/FileSaver.js


Thanks!!



Hamza Mounir.
