const express = require('express');

const app = express();

app.get("/", (req,res) => {
	//console.log(req);
	res.send('<h1 style="color:red">Hello World!</h1>');
})

app.get("/contact", (req,res) => {
	res.send("Contact me at: Ricardojb95@hotmail.com");
}) 

app.get("/about", (req,res) => {
	res.send("<h2>My Name is Ricardo Jaramillo</h2></br><p>I adore videogames, I live in Medellín and my passion is programming.</p>")
})

app.listen(3000, () => {
	console.log('Listening at port 3000');
})