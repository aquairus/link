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
    hello() {
        alert('Hello, ' + this.name + '!');
    }
}

$("#insert").click(function(event) {

    id = $("input[name=id]").val();
    name = $("input[name=name]").val();
    _class = $("input[name=class]").val();
    score = $("input[name=score]").val();

    alert(id + name)
});
var xiaoming = new Student('小明')
