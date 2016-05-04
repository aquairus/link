require.config({　　　　
    paths: {　　　　　　
        "jquery": "../lib/jquery",

        　　　　
    }　　
});

require(['jquery'], function($) {


    $('#color').bind("click", function c() {
        colorMod = cp2.colorpicker('getValue', '#00aabb')
        ctx.strokeStyle = colorMod

    });

    $('#clean').bind("click", function clean() {
        ctx.clearRect(0, 0, 400, 400);

    });
    $('#restore').bind("click", function restore() {


        tmp_data = pic_heap.pop()
        ctx.putImageData(tmp_data, 0, 0);
    });
    $('#save').bind("click", function save() {
        img_url = canvas.toDataURL("image/png");
        pic = window.open(img_url, "canvas_pic")
    });




    $('#div1').mousedown(function start(event) {
        ctx.beginPath();

        if (flag == 0) {
            tmp_data = ctx.getImageData(0, 0, 400, 400)
            pic_heap.push(tmp_data)
            flag = 1;

        }

    });

    $('#div1').mousemove(function move(event) {
        a(event)
    });

    $('#div1').mouseup(function end(event) {

        endpoint(event)

    });


    　　
});
