const { readFileSync, writeFileSync } = require('fs');

const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public'));

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
				        width: 35em;
				        margin: 0 auto;
				        font-family: Tahoma, Verdana, Arial, sans-serif;
				    }
			</style>
		</head>
		<body>
			<h1>I run this off a raspberry pi.</h1>
			
			<p>Hello world. Its a raspberry pi, what do you want. It's two lines of text, a view counter, and a png take it or leave it.</p>
			<p>This image of Lego Ghost Obi Wan Kenobi has been viewed ${newCount} times. </p>
			
			<img src="https://static.wikia.nocookie.net/legogames/images/2/24/Ben_Kenobi_%28Ghost%29_image.png" width="207px" height="315px"/>
		</body>
		</html>

	`);

});

app.listen(5000, () => console.log('http://localhost:5000/'));
