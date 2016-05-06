var Student_list_size = 1000;
var Student_list = new Array();

var first_string = "赵 钱 孙 李 周 吴 郑 王 冯 陈 楮 卫 蒋 沈 韩 杨 \
朱 秦 尤 许 何 吕 施 张 孔 曹 严 华 金 魏 陶 姜 \
戚 谢 邹 喻 柏 水 窦 章 云 苏 潘 葛 奚 范 彭 郎 \
鲁 韦 昌 马 苗 凤 花 方 俞 任 袁 柳 酆 鲍 史 唐 \
费 廉 岑 薛 雷 贺 倪 汤 滕 殷 罗 毕 郝 邬 安 常 \
乐 于 时 傅 皮 卞 齐 康 伍 余 元 卜 顾 孟 平 黄 \
和 穆 萧 尹 姚 邵 湛 汪 祁 毛 禹 狄 米 贝 明 臧 \
计 伏 成 戴 谈 宋 茅 庞 熊 纪 舒 屈 项 祝 董 梁 \
杜 阮 蓝 闽 席 季 麻 强 贾 路 娄 危 江 童 颜 郭 \
梅 盛 林 刁 锺 徐 丘 骆 高 夏 蔡 田 樊 胡 凌 霍 \
经 房 裘 缪 干 解 应 宗 丁 宣 贲 邓 郁 单 杭 洪";

var second_string = "俊娟 小蓉 春元 湘平 惠琼 昭君 一菲 秀琼 淑娇 雪琪 \
碧莲 亚菲 雅轩 诗琪 依玲 依玲 淑燕 玉琼 静涵 娉婷 \
文怡 静萍 韵涵 亦菲 秋洁 慧云 香凝 苏梅 佳君 泽慧 \
静君 星辰 子桐 慧艳 紫怡 灵燕 惠燕 淑怡 梓桐 思璇 \
立涛 思月 文莲 燕子 嘉懿 瑞婷 蕊蕊 逸菲 翔云 月芳 \
晓怡 静敏 思晨 焕英 素琼 丹青 佳雪 舒涵 雅晴 静燕 \
嘉懿 煜城 懿轩 烨伟 苑博 伟泽 熠彤 二 三 四 五 \
宇 泽 博 铭 亦 广 远 用 浩 主 大 义 涵 意 包 名 杰 \
洛 璟 煜 芮 睿 晨 熠 悟 莹 颖 语 烜 瑄 萱 \
轩 珸 羽 璇 允 芸 沺 苒 阳 煦 珊 灿 耀 烨 \
诺 玥 悦 跃 峥 知 智 旭 珝 珬 珂 姁 琬 妧 \
炎 妍 珚 彦 琰 婷 琅 朗 卓 琢 凡 思 宇 郁 \
鸿煊 博涛 烨霖 烨华 煜祺 智宸 正豪 \
昊然 明杰 立诚 立轩 立辉 峻熙 弘文 \
熠彤 鸿煊 烨霖 哲瀚 鑫鹏 致远 俊驰 \
雨泽 烨磊 晟睿 天佑 文昊 修洁 黎昕 \
远航 旭尧 鸿涛 伟祺 荣轩 越泽 浩宇 \
瑾瑜 皓轩 擎苍 擎宇 志泽 睿渊 楷瑞";

var first_name = first_string.split(" ");
var second_name = second_string.split(" ");


function fresh(){
  $('tr:gt(0)').remove()
  Student_list.forEach(function(e,idx) {
      e.hello()
  })

}


class Student {
    constructor() {
        this.uid = 2015000000 + Math.ceil(Math.random() * 1000000)
        var first = Math.ceil(Math.random() * (first_name.length - 1))
        var second = Math.ceil(Math.random() * (second_name.length - 1))
        this.name = first_name[first] + second_name[second];
        this.age = 1 + Math.round(Math.random() * 2);
        this._class = 1 + Math.round(Math.random() * 4);
        this.score = 70 + Math.round(Math.random() * 30);
    }
    next_one(next_student) {
        this.next = next_student;

    }
    hello() {
        var td_text = '<tr><td>' + this.uid + '</td><td>' +
            this.name + '</td><td>' + this._class + "</td><td>" +
            this.age + '</td><td>' + this.score + "</td></tr>"
        var new_text = 'uid:' + this.uid + '<br>name:' + this.name +
            '<br>' + 'class: ' + this._class + " age:" + this.age +
            '<br>score:' + this.score
        $('#last_insert').html(new_text)
        $('tbody').append(td_text)
    }
}



$("#gen").click(function(event) {
    var new_student = new Student()
    new_student.hello()
    Student_list.push(new_student);

})
$("#gen_all").click(function(event) {
    for (var i = 0; i < Student_list_size; i++) {
        var new_student = new Student()
        new_student.hello()
        Student_list.push(new_student);

    }

})


function my_sort(array,cmp){
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (cmp(array[i],array[j])){
        var tmp=array[i]
        array[i]=array[j]
        array[j]=tmp
      }
    }
  }
}

$("#delete").click(function(event) {
    $('tr:gt(1)').remove()
})



function fresh(){
  $('tr:gt(1)').remove()
  Student_list.forEach(function(e,idx) {
      e.hello()
  })

}


$("#by_name").click(function(event) {

  my_sort(Student_list,function sortNumber(b,a) {
          return a.name> b.name
  })
  // Student_list.sort(function sortNumber(b,a) {
          // return a.name> b.name
  // })
  fresh()
})

$("#by_id").click(function(event) {
  my_sort(Student_list,function sortNumber(b,a) {
          return a.uid< b.uid
  })
  fresh()
})

$("#by_grade").click(function(event) {
  my_sort(Student_list,function sortNumber(b,a) {
        if (a.score == b.score) {
            return a.uid>b.uid
        } else {
            return a.score> b.score
        }
    })
    fresh()
})
