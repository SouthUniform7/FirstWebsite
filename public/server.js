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
			
			
			<img src="https://www.dropbox.com/s/wb8yh5kmi2cjn9u/Ben.jpg?dl=1" width="358px" height="560px"/>
			<img src="https://www.dropbox.com/s/uzhnsvyeq6ehsy9/Anakin.jpg?dl=1" alt="Anakin Skywalker" width="546px" height="689px"/>
			<img src="https://www.dropbox.com/s/twcokhbg4wk9yb8/Yoda.jpg?dl=1" alt="Yoda" width="462px" height="588px"/>
		</body>
		</html>

	`);

});

app.listen(5000, () => console.log('http://localhost:5000/'));
