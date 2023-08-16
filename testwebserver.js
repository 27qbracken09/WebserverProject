
//Server Stuff
var http = require('http')
var fs = require('fs')
const PORT = 80





//Webpage
var homepage;
var booking;
var casinopage;
var explore;
fs.readFile("./index.html", function(error, html){
    if (error) throw error;
    homepage = html;
});
fs.readFile("./AtticusBooking.html", function(error, html){
    if (error) throw error;
    booking = html;
});
fs.readFile("./AtticusCasino.html", function(error, html){
    if (error) throw error;
    casinopage = html;
});
fs.readFile("./AtticusExplore.html", function(error, html){
    if (error) throw error;
    explore = html;
});









//Photos
var logo;
var wooded_forest;
var casino5;
var magnet;
var clock;
var casino3;
var casino4;
var calendar;
var fireworks;
var money;
var stars;
var calendar1;
var casino1;
var casino2;
fs.readFile("./Logo.png", function(error, img){
    if (error) throw error;
    logo = img;
});
fs.readFile("./Casino5.jpg", function(error, img){
    if (error) throw error;
    casino5 = img;
});
fs.readFile("./Magnet.jpg", function(error, img){
    if (error) throw error;
    magnet = img;
});
fs.readFile("./Clock.png", function(error, img){
    if (error) throw error;
    clock = img;
});
fs.readFile("./Casino3.avif", function(error, img){
    if (error) throw error;
    casino3 = img;
});
fs.readFile("./Casino4.avif", function(error, img){
    if (error) throw error;
    casino4 = img;
});
fs.readFile("./Calendar.jpg", function(error, img){
    if (error) throw error;
    calendar = img;
});
fs.readFile("./Fireworks.jpg", function(error, img){
    if (error) throw error;
    fireworks = img;
});
fs.readFile("./wooded_forest.jpg", function(error, img){
    if (error) throw error;
    wooded_forest = img;
});
fs.readFile("./Money.jpg", function(error, img){
    if (error) throw error;
    money = img;
});
fs.readFile("./Stars.png", function(error, img){
    if (error) throw error;
    stars = img;
});
fs.readFile("./Calendar.png", function(error, img){
    if (error) throw error;
    calendar1 = img;
});
fs.readFile("./Casino1.jpg", function(error, img){
    if (error) throw error;
    casino1 = img;
});
fs.readFile("./Casino2.avif", function(error, img){
    if (error) throw error;
    casino2 = img;
});










var server = http.createServer(function(request, response){
    if (request.url == '/'){
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(homepage);
        response.end();
    
    }
    else if (request.url == '/AtticusBooking.html'){
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(booking);
        response.end();
    }
    else if (request.url == '/AtticusCasino.html'){
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(casinopage);
        response.end();
    }
    else if (request.url == '/AtticusExplore.html'){
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(explore);
        response.end();
    }
    else if (request.url == '/Logo.png'){
        response.writeHeader(200, {"Content-Type": "img/png"});
        response.write(logo);
        response.end();
    }
    else if (request.url == '/Casino5.jpg'){
        response.writeHeader(200, {"Content-Type": "img/jpg"});
        response.write(casino5);
        response.end();
    }
    else if (request.url == '/Magnet.jpg'){
        response.writeHeader(200, {"Content-Type": "img/jpg"});
        response.write(magnet);
        response.end();
    }
    else if (request.url == '/Clock.png'){
        response.writeHeader(200, {"Content-Type": "img/png"});
        response.write(clock);
        response.end();
    }
    else if (request.url == '/Casino3.avif'){
        response.writeHeader(200, {"Content-Type": "img/avif"});
        response.write(casino3);
        response.end();
    }
    else if (request.url == '/Casino4.avif'){
        response.writeHeader(200, {"Content-Type": "img/avif"});
        response.write(casino4);
        response.end();
    }
    else if (request.url == '/Calendar.jpg'){
        response.writeHeader(200, {"Content-Type": "img/jpg"});
        response.write(calendar);
        response.end();
    }
    else if (request.url == '/Fireworks.jpg'){
        response.writeHeader(200, {"Content-Type": "img/jpg"});
        response.write(fireworks);
        response.end();
    }
    else if (request.url == '/wooded_forest.jpg'){
        response.writeHeader(200, {"Content-Type": "img/jpg"});
        response.write(wooded_forest);
        response.end();
    }
    else if (request.url == '/Money.jpg'){
        response.writeHeader(200, {"Content-Type": "img/jpg"});
        response.write(money);
        response.end();
    }
    else if (request.url == '/Stars.png'){
        response.writeHeader(200, {"Content-Type": "img/png"});
        response.write(stars);
        response.end();
    }
    else if (request.url == '/Casino1.jpg'){
        response.writeHeader(200, {"Content-Type": "img/jpg"});
        response.write(casino1);
        response.end();
    }
    else if (request.url == '/Casino2.avif'){
        response.writeHeader(200, {"Content-Type": "img/avif"});
        response.write(casino2);
        response.end();
    }
    else {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write('<html><head><title>Error 404</title></head><body><h1>Error 404: Webpage not found</h1></br><h2>Go Ask Quinn to fix it!</h2></body></html>')
        response.end();
    }
});

server.listen(PORT);