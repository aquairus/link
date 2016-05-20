
class Student {
    constructor(name, uid, _class, score) {
        this.uid = uid
        this.name = name;
        this._class = _class;
        this.score = score;
    }
    next_one(next_student) {
        this.next = next_student;
    }
    locate(loc) {
        this.loc = loc;
    }
    hello() {
        $('#last_insert').html('uid:' + this.uid + ' name:' + this.name + '<br>' + 'class:' + this._class + ' score:' + this.score)
    }
}


class Student_list {
    constructor() {
        this.id_list = new Array()
        this.score_list = new Array()

    }
    add(node) {
        this.id_list.push(node)

        this.id_list.sort(function sortNumber(a, b) {
            if (a.score == b.score) {
                return a.uid - b.uid
            } else {
                return a.score - b.score
            }

        })
        this.show()
    }

    show() {
        var score_list = new Array()
        this.id_list.forEach(function(e) {
            score_list.push(e.score);
        })
        var score_string = score_list.toString()
        $('#score_list').html(score_string)

        var uid_list = new Array()
        this.id_list.forEach(function(e) {
            uid_list.push(e.uid);
        })
        var uid_string = uid_list.toString()
        $('#uid_list').html(uid_string)
    }
    search(uid) {
        var result=undefined;
        this.id_list.forEach(function(e,idx) {
            if (uid == e.uid) {
                result= idx;
            }
        })
        return result
    }
    delete(idx){
      var stud=this.id_list.splice(idx,1)
      free(stud[0].loc)
      this.show()
    }

    hello(idx){
      this.id_list[idx].hello()
      this.show()
    }
    average() {
        var sum=0
        this.id_list.forEach(function(e,idx) {
            sum=sum+Number(e.score)
        })
        return sum/this.id_list.length
    }


}


var size = 25 * 15;
var menory = new Array();
for (var i = 0; i < size; i++) {
  menory.push(i)
}

class_one = new Student_list();


$(document).ready(function(){
  for (var i = 0; i < size; i++) {
    var ele=document.createElement("div");
    ele=$(ele).addClass("free").addClass("men")
    $("#menory").append(ele)
  }

});

function malloc(){
  var rest=menory.length;
  var idx=Math.floor(Math.random()*rest);

  var loc=menory.splice(idx,1)
  var str=".men:eq("+loc+")"
  $(str).removeClass("free").addClass("occupy")
  return loc;
}

function free(idx){
  var str=".men:eq("+idx+")"
  $(str).removeClass("occupy").addClass("free")
  menory.push(idx)

}

$("#insert").click(function(event) {

    var uid = $("input[name=uid]").val();
    var name = $("input[name=name]").val();
    var _class = $("input[name=class]").val();
    var score = $("input[name=score]").val();
    $('input').val("")

    var new_stud = new Student(name, uid, _class, score);
    var loc=malloc()
    new_stud.locate(loc)
    new_stud.hello()
    class_one.add(new_stud)

});


$("#search").click(function(event) {
    var uid = $("input[name=uid]").val();
    $('input').val("")
    var idx = class_one.search(uid)
    if (idx!= undefined) {
        class_one.hello(idx)
    }

})
$("#delete").click(function(event) {
    var uid = $("input[name=uid]").val();
    $('input').val("")
    var idx = class_one.search(uid)
    if (idx!= undefined) {
        class_one.hello(idx)
        class_one.delete(idx)
    }


})
$("#average").click(function(event) {
    var ave =   class_one.average()
      $('#last_insert').html('average:'+ave)
})
