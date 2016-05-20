var BallX, BallY;
var AddX, AddY;
var width, height;
var canvas;
var context;
var functionId;

var speed = 3
var ball_diameter = 30
var ball_color = "#5effb2"


function btnBegin_onclick() {

    canvas = document.getElementById("canvas");
    width = canvas.width;
    height = canvas.height;
    context = canvas.getContext('2d');

    BallX = parseInt(Math.random() * canvas.width);
    BallY = parseInt(Math.random() * canvas.height);

    AddX = -speed;
    AddY = -speed;
    draw();
    document.getElementById("start").disabled = "disabled";
    functionId = setInterval("draw()", 20);
}


function collision_detection() {
    if (BallX < 5)
    {
        BallX = 5;
        AddX = -AddX;
    } else if (BallX > width - 5)
    {
        BallX = width - 5;
        AddX = -AddX;
    }
    if (BallY < 5)
    {
        BallY = 5;
        AddY = -AddY;
    } else if (BallY > height - 5)
    {
        BallY = height - 5;
        AddY = -AddY; 
    }
}

function canvas_init() {
  context.clearRect(0, 0, width, height);
  context.save();
  context.fillStyle = "#5ee2ff";
  context.strokeStyle = "black";
  context.linewidth = 3;
  context.fillRect(3, 3, width - 5, height - 5);
  context.strokeRect(3, 3, width - 5, height - 5);
  context.beginPath();
  context.fillStyle = ball_color;
}


function draw() {

    canvas_init()
    context.arc(BallX, BallY, ball_diameter, 0, Math.PI * 2, false);
    BallX += AddX;
    BallY += AddY;
    collision_detection()
    context.fill();

}

function canvas_mouseup(ev) {
    var differenceX;
    var differenceY;


    differenceX = ev.offsetX- BallX;
    differenceY = ev.offsetY - BallY;

    if (-ball_diameter <= differenceX && differenceX <= ball_diameter)
        if (-ball_diameter <= differenceY && differenceY <= ball_diameter) {
            alert("恭喜您获胜！游戏结束");
            clearInterval(functionId);

            document.getElementById("btnBegin").disabled = "";
        }
}




$("#start").click(function(event) {
    btnBegin_onclick()

})

$(document).ready(function() {
    window_onload()
})

$('#div1').mouseup(function end(event) {
    canvas_mouseup(event)

});
