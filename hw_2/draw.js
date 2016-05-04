var x = 0
var y = 0
var ctx
var flag = 0

var pic_heap=new Array();
function draw() {
           canvas = document.getElementById("canvas");
           if (canvas.getContext) { //检测浏览器是否兼容
              ctx = canvas.getContext("2d");
        ctx.fillStyle="#FF0000";
      ctx.beginPath();

    }else{

      }
}



function a(ww){
    var x,y;
    x=ww.offsetX;
    y=ww.offsetY;
    document.getElementById('div2').innerHTML="X"+":"+x+","+"Y"+":"+y;

    if(flag == 1){
      ctx.lineTo(x,y);
      ctx.stroke();
      }

}


function startpoint(posEvent){

  x = posEvent.offsetX;
  y = posEvent.offsetY;

  ctx.beginPath();

  if(flag == 0){
    flag = 1;
  }

}


function endpoint(posEvent){

  x = posEvent.offsetX
  y = posEvent.offsetY

  if(flag == 1){
    flag = 0;
  }
}


draw()
cp2=$('#cp2').colorpicker();
