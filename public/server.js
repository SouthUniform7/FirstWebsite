const { readFileSync, writeFileSync } = require('fs');

const express = require('express');
const app = express();

var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
	const count = readFileSync('./count.txt', 'utf-8');
	console.log('count ', count)

	const newCount = parseInt(count) + 1

	writeFileSync('./count.txt', newCount.toString());

	res.send(`

		<!DOCTYPE html>
		<html>
		<head>
			<title>Bruh.</title>
			<style>
					body {
						width: 50em;
						margin: 0 auto;
						font-family: Tahoma, Verdana, Arial, sans-serif;
					}
			</style>
		</head>
		<body>
			<h1>I run this off a raspberry pi.</h1>
			
			<p>Its a raspberry pi, what do you want. It's two lines of text, a view counter, and a png take it or leave it.</p>
			<p>These images of Lego Ghost Obi Wan Kenobi, Anakin, and Yoda have been viewed ${newCount} times. </p>
			
			
			<img src="https://scontent-lga3-2.xx.fbcdn.net/v/t31.18172-8/12710860_962082760545114_5771724420675882439_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=rVjUaYBA8GsAX-P3V6b&_nc_ht=scontent-lga3-2.xx&oh=00_AT8F4UjkUUYCIEGXxhI9iVnXxvGC-DHWtvZCoV6rcuaV4w&oe=62135859"/>
		</body>
		</html>

	`);

});

app.listen(5000, () => console.log('http://localhost:5000/'));
