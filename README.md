# Space Odyssey

Space Odyssey is an online tressure hunt that was conducted as part of [NOVA 3.0](https://www.instagram.com/nova_3.o/).

This repo contains the code to the webpage that was used for the tressure hunt event.

### Competition Format

The tressure hunt was held in a flash quiz type format, with the player answering a series of questions with 4 options each, the questions are divided into 8 sets, each set has a theme. and after completing each set the user is awarded a clue. After completing all questions the user will get 8 clues, with which the user has to find the answer to the tressure hunt, the current clues point to the `DART mission`.

### Code Format
`index.html` is the source HTML file.
`js/index.js` is the main js file that links all the other js files and is the main file.
`js/lib.js` is a utility library module.
`js/qrcode.min.js` used for client side QR code generation. Code by 
[Davidshimjs](https://davidshimjs.github.io/qrcodejs/).
`css/style.css` stylesheet that has all the css code.


#### Game data structure
`js/gamedata.js` is the file that contains all the questions, answers, clues, and everything related to the tressure hunt itself.
Each question, clues, other tressure hunt related stuffs are represented by an object in array, this array is named by `textNode` in `js/gamedata.js`

```javascript
const textNode = [{
	id: <ID of object> [Int],
	text: <Text to be displayed> [String]
	image: <Image file name, not file path> [String],
	imgStyle: <Inline css style for image, optional> [String]
	options: [{
	    text: <Option text 1> [String],
		nextText: <ID of next object to be displayed when clicked> [Int],
		onclick: <A callback function that gets fired when button is pressed, optional> [function]
	}, ...],
}, ...];
```
The code is structured like a `choose your adventure` book.
##### Clues
In code, each clue is an image with the file path;
`images/Clue1.jpg`, `images/Clue2.jpg`, `images/Clue3.jpg`, `images/Clue4.jpg`, `images/Clue5.jpg`, `images/Clue6.jpg`, `images/Clue7.jpg`, `images/Clue8.jpg`

##### Google forms
The game requires two google forms, one for registering users at the beginning and another one for the answer submission. 

1st google forms should contain the Name, Email, Contact Number etc as required fields. Upon submission, the timestamp is recorded by the google forms and this time is used for evaluation. And users should return to the game and start it.

2nd google forms should contain the Name, Email, Contact Number, Unique Code, Answer as the required fields. The user will get the link to this google form via a QR code,after answering all the questions. This QR code is stored as an image in `images/quest.png`.
`Unique code` is an encrypted string that contains `name`, `start`, `end` in a JSON format. The encryption is done using CryptoJS.AES using the encryption key stored in the const `KEY`. This string is then converted to a QR code. The users are required to scan or copy the unique code from QR or text box and paste it over on the 2nd google form. 


### Credit
This a modified version from [this repo](https://github.com/navaneethsdk/SpaceOdyssey) (a fork).
The original code is written by [Navaneethsdk](https://github.com/navaneethsdk)

