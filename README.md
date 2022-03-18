## Trimester 3 - Front-End Web Development  
All of the concept based Front-End Web Development projects for Holberton School Tulsa  
   
## 0x00. [Bootstrap](https://github.com/tayloradam1999/holbertonschool-web_front_end/tree/main/0x00-Bootstrap)
  
Bootstrap is a free and open-source web development framework. It’s designed to ease the web development process of responsive, mobile-first websites by providing a collection of syntax for template designs.  
  
In other words, Bootstrap helps web developers build websites faster as they don’t need to worry about basic commands and functions. It consists of HTML, CSS, and JS-based scripts for various web design-related functions and components  

### Learning Objectives  
- When to use a Class or a function to create a component
- The lifecycle of a Class component
- How to test a component
- How to utilize a Jest spy to verify that a function is being called correctly
- What an HOC is and how to use it
- How to optimize performance and control which components to render  
  
**Example of ```index.html``` with Bootstrap CDN links**  
  
```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Bootstrap example</title>
</head>
  <body> 
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
```  
  
## 0x00. [Javascript Advanced](https://github.com/tayloradam1999/holbertonschool-web_front_end/tree/main/0x00-Javascript_advanced)  
  
### New ES6 Syntax
- let – declare block-scoped variables using the ```let``` keyword.
- let vs. var – understand the differences between ```let``` and ```var```.
- const – define constants using the ```const``` keyword.
- Default function parameters – learn how to set the default value for parameters of a function.
- Rest parameter – introduce you to the rest parameter and how to use them effectively.
- Spread operator – learn how to use the spread operator effectively.
- Object literal syntax extensions – provide a new way to define object literal.
- for…of – learn how to use the ```for...of``` loop to iterate over elements of an iterable object.
- Octal and binary literals –  provide support for binary literals and change the way to represent octal literals.
- Template literals – learn how to substitute variables in a string.  
  
### Learning Objectives
- What is lexical scoping in JavaScript
- What is closure in JavaScript
- How to use closure
- How to chain different closures
- How to simulate private methods with Closure
- The execution stack order with JavaScript
- How to use binding
- How to use callbacks
  
**An example of binding a variable to an object**  
  
```javascript
let roomDimensions = {
	width: 50, 
	length: 100, 
	getArea() {
		return this.width * this.length;
	}
};

let boundGetArea = roomDimensions.getArea.bind(roomDimensions);

boundGetArea(); // output 5000
```  
  
## 0x00. [Advanced HTML](https://github.com/tayloradam1999/holbertonschool-web_front_end/tree/main/0x00-html_advanced)  
  
The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.  
  
### Learning Objectives
- Which guidelines to follow for HTML
- How to create the skeleton of an HTML5 page
- How to use semantic HTML tags to structure a web page
- Which use cases to use ```div``` vs ```span```
- The semantic value’s of ```header```, ```main```, ```footer```, ```article```, ```nav```, ```section```, ```aside```
- How to use headings (and why it’s important to follow the hierarchical order)
- How to make lists in HTML
- The differences between medias (SVG, GIF, PNG, JPG)
- How to structure data in a table
- How to integrate a video in a webpage
- How to integrate an audio file in a webpage
- How to embed external content
- How to correctly structure an HTML page  
  
**Example of boiler plate ```index.html```**  
  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```  
  
## 0x00. [Sass & Scss](https://github.com/tayloradam1999/holbertonschool-web_front_end/tree/main/0x00-sass_scss)  
  
SASS (Syntactically Awesome Style Sheets) is a pre-processor scripting language that will be compiled or interpreted into CSS. SassScript is itself a scripting language whereas SCSS is the main syntax for the SASS which builds on top of the existing CSS syntax. It makes use of semicolons and brackets like CSS (Cascaded Style Sheets).  
  
SASS and SCSS can import each other. Sass actually makes CSS more powerful with math and variable support.   
  
Let’s list down the main difference between SASS and SCSS.  
- SASS is used when we need an original syntax, code syntax is not required for SCSS.
- SASS follows strict indentation, SCSS has no strict indentation.
- SASS has a loose syntax with white space and no semicolons, the SCSS resembles more to CSS style and use of semicolons and braces are mandatory.
- SASS file extension is .sass and SCSS file extension is .scss.
- SASS has more developer community and support than SCSS. 
  
### Learning Objectives  
- What Sass means
- How to write Sass & Scss file
- What is the difference between Sass and Scss
- What is the Sass preprocessing
- How to declare a variable
- How to use nested definition
- How to import a Sass file
- How to use mixins
- How to declare extend/inheritance styles
- How to manipulate operators

**An example of a SASS file that creates H* tags, where '*' is the size of the font used.**  
  
```scss
/* h1 must have font size equal to 1px, h2 must have font size equal to 2px, etc.
You must create H* tags from 1 to 5
You must use @for statement */

@for $i from 1 through 5 {
    h#{$i} {
      font-size: #{$i}px;
    }
}
```  
  
## 0x01. [Advanced CSS](https://github.com/tayloradam1999/holbertonschool-web_front_end/tree/main/0x01-CSS_advanced)  
  
Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. 
  
CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.  
  
### Learning Objectives
- Selectors, properties, and values
- The difference between block and inline styling
- How to ensure consistency across all browers (CSS reset)
- How to setup CSS variables
- The differences between inline, embeded and external CSS
- How grid systems work (with floats)
- The difference between icons webfonts and SVG icons
- The difference between pseudo-classes and pseudo-elements
- How to make background gradients
- How to animate elements in CSS
- How to transform (2d, 3d) elements
- What vendor prefixes are
  
**Here is an example of styling the 'button' class with only variable values.**  
  
```css
.button {
    display: var(--button-display);
    padding: var(--button-padding);
    border: var(--button-border);
    font-size: var(--button-font-size);
    color: var(--button-color);
    text-decoration: var(--button-text-decoration);
}
```  
  
## 0x01. [JQuery Advanced](https://github.com/tayloradam1999/holbertonschool-web_front_end/tree/main/0x01-JQuery_advanced)  
  
jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.  
  
### Learning Objectives
- Learn how to load jQuery from a CDN in a page
- Learn the different ways to create DOM elements with jQuery
- Learn how to modify elements
- Learn how to add new elements to a page with different positions
- Learn how to add a click handler on an element
- Learn how to send GET, POST, DELETE or any type of AJAX query with jQuery
- Learn how to create a pagination
  
**An example of changing the html of the <button> element with the class 'continue' to 'Next Step...'**  
  
```javascript
$( "button.continue" ).html( "Next Step..." )
```
  
0x01. [Flexbox](https://github.com/tayloradam1999/holbertonschool-web_front_end/tree/main/0x01-flexbox)  
0x02. [Cookies & local storage](https://github.com/tayloradam1999/holbertonschool-web_front_end/tree/main/0x02-Cookies_local_storage)  
0x02. [Developer tools](https://github.com/tayloradam1999/holbertonschool-web_front_end/tree/main/0x02-developer_tools)  
0x02. [Forms](https://github.com/tayloradam1999/holbertonschool-web_front_end/tree/main/0x02-form)  
0x03. [Accessibility](https://github.com/tayloradam1999/holbertonschool-web_front_end/tree/main/0x03-accessibility)  
0x03. [Responsive design](https://github.com/tayloradam1999/holbertonschool-web_front_end/tree/main/0x03-responsive_design)  
