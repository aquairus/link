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
        $('#last_insert').html('uid:' + this.uid + ' name:' + this.name + '<br>' + 'class:' + this._class + ' score:' + this.score)
    }
}



$("#gen").click(function(event) {
    alert('gen')
})
$("#sort").click(function(event) {
    alert('sort')
})
