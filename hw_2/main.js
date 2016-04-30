
require.config({
　　　　paths: {
　　　　　　"jquery": "../lib/jquery",

　　　　}
　　});

require(['jquery'], function ($){

      // /alert('ready');

      $('#color').bind("click", function c(){
        changeColor()
      }
      );

      $('#clean').bind("click", function clean(){
        ctx.clearRect(0,0,400,400);
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

      $('#div1').mouseup( function end(event){
          // alert('welcome')
        endpoint(event)
        //  alert('welcome')
      }
      );


      // $('.color').bind("click", function c(){
      //   alert('HI')}
      // );
      // $().ready(function orz(){
      //   alert('welcome')}
      // );
      // )


　　});
