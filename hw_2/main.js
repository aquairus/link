
require.config({
　　　　paths: {
　　　　　　"jquery": "../lib/jquery",

　　　　}
　　});

require(['jquery'], function ($){

      // /alert('ready');

      $('.color').bind("click", function c(){
        changeColor()
      }
      );


      $('#div1').mousedown( function start(event){
        startpoint(event)
      }
      );

      $('#div1').mousemove( function move(event){
        a(event)
      }
      );

      $('#div1').mouseup( function endpoint(event){
        endpoint(event)
      }
      );


      // $('.color').bind("click", function c(){
      //   alert('HI')}
      // );
      // $().ready(function orz(){
      //   alert('HI')}
      // );
      // )


　　});


var getRandomColor = function(){
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}


var changeColor=function changeColor(){
	var colorMod = getRandomColor()

	alert(colorMod)
	ctx.strokeStyle  = colorMod
}
