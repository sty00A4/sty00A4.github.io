var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
var body = document.body,
    html = document.documentElement;
canvas.height = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
    document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%*()&/\\{[|]}<>?!";
matrix = matrix.split("");

var font_size = 16;
var columns = canvas.width/font_size;
var drops = [];
for(var x = 0; x < columns; x++) drops[x] = 1; 

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.07)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#034d03";
    ctx.font = font_size + "px JetBrains Mono";

    for(var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(draw, 40);