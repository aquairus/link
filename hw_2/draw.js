var x = 0
var y = 0
var ctx
var flag = 0


function draw() {
           canvas = document.getElementById("canvas");
           if (canvas.getContext) { //检测浏览器是否兼容
              ctx = canvas.getContext("2d");
        ctx.fillStyle="#FF0000";
        // ctx.beginPath();
        cxt.arc(70,18,15,0,Math.PI*2,true);
        cxt.closePath();
        cxt.fill();
                  //你的canvas代码在这里
    }else{
      //不兼容的代码
      }
}



function a(ww){
    var x,y;
    x=ww.clientX;
    y=ww.clientY;
    document.getElementById('div2').innerHTML="X"+":"+x+","+"Y"+":"+y;

    if(flag == 1){
      ctx.lineTo(x,y);
      ctx.stroke();
      }

}


function startpoint(posEvent){
  x = posEvent.clientX
  y = posEvent.clientY
  ctx.beginPath();
  ctx.moveto(x,y)
  if(flag == 0){
    flag = 1
  }
}


function endpoint(posEvent){
  x = posEvent.clientX
  y = posEvent.clientY
  ctx.stroke();

}

var getRandomColor = function(){
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}


var changeColor=function changeColor(){
	var colorMod = getRandomColor()

	alert(colorMod)
	ctx.strokeStyle  = colorMod
}

draw()