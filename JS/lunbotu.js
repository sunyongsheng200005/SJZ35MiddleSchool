var btnLeft = document.getElementById('btnLeft')
var btnRignt = document.getElementById('btnRignt')
var item = document.getElementsByClassName('item')
var li = document.getElementById("ulbtn").getElementsByTagName("li")
var div = document.getElementById('div')
var index = 0;

//移除所有的active项
function removeClassActive() {
    for (var i = 0; i < item.length; i++) {
        item[i].className = 'item'
        li[i].className = ''
    }
}
btnLeft.onclick = function() {
    if (index <= 0) {
        index = 5
    }
    index--
    goindex()
}

function goindex() {
    removeClassActive()
    item[index].className = 'item active'
    li[index].className = 'liwhite'
}
btnRignt.onclick = function() {
    if (index >= 4) {
        index = -1
    }
    index++
    // console.log(li)
    goindex()
}

function goindex1() {
    if (index >= 4) {
        index = -1
    } else if (index < 0) {
        index = 4
    }
    index++
    goindex()
}

//给每一个li挂上一个点击事件

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function() {
        // console.log(this.li.indexOf())
        var point = this.getAttribute('data-index')
        index = point
        goindex()
    })
}


var timer = setInterval(function() {
    goindex1()
    clearInterval(timer);

}, 3000);
div.onmouseleave = function() {
    clearInterval(timer);
    timer = setInterval(function() {
        goindex1()
    }, 3000);
}

function hideBtn() {
    /*
       使用$(document).width()来获取文档的宽，或者使用$(document).height()获取文档的高（这里是jQuery方式）
       然后判断宽度是否小于，样式变化的最小宽度
    */
    // if ($(document).width() < 1201) {
    //     $("#serchbtn").css("display", "none"); /* 比最小宽度小时改变按钮和输入框的样式 */
    //     $("#serchmodule").css("display", "none"); /* 改变按钮的样式 （隐藏） */
    // } else if ($(document).width() < 1450) {
    //     $("#serchmodule").css("display", "none");
    //     $("#serchbtn").css("display", "block");
    // } else { /* 如果比最小宽度大时把样式改回来 */
    //     $("#serchmodule").css("display", "block");
    //     $("#serchbtn").css("display", "block");
    // }
    if ($(document).width() > 1450) {
        $("#serchbtn").css("display", "block"); /* 比最小宽度小时改变按钮和输入框的样式 */
        $("#serchmoduleshow").css("display", "block"); /* 改变按钮的样式 （隐藏） */
    } else if ($(document).width() > 1270) {
        $("#serchmoduleshow").css("display", "none");
        $("#serchbtn").css("display", "block");
    } else { /* 如果比最小宽度大时把样式改回来 */
        $("#serchmoduleshow").css("display", "none");
        $("#serchbtn").css("display", "none");
    }

}
hideBtn() /* 让函数在页面加载时就执行一次，不然在放大后刷新页面可能会出现样式问题 */
var serchmodule = document.getElementById("serchmodule");

serchmodule.onmouseover = function inputshow() {
    if ($(document).width() > 1270 && $(document).width() < 1450) {
        $("#serchmoduleshow").className = 'fl serchmodulenull';
        $("#serchmoduleshow").css("background", "#fff");
        $("#serchmoduleshow").css("display", "block");

    }
}

serchmodule.onmouseout = function inputshow() {
    if ($(document).width() > 1270 && $(document).width() < 1450) {
        $("#serchmoduleshow").className = 'serchmodulenull';
        $("#serchmoduleshow").css("background", "rgba(255, 255, 255, 0)");
        $("#serchmoduleshow").css("display", "none");

    }
}